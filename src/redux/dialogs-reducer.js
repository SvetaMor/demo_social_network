import {dialogsAPI, profileAPI} from '../api/api';
import {getCountPages, delElementFromArray} from '../utils/object-helpers';
import delay from 'delay';
import {reset} from 'redux-form';

const SEND_MESSAGE = 'SEND-MESSAGE';
const GET_ALL_MESSAGES = 'GET_ALL_MESSAGES';
const GET_MESSAGES = 'GET_MESSAGES';
const GET_DIALOGS= 'GET_DIALOGS';
const CLEAR_DIAOGS = 'CLEAR_DIAOGS';
const SET_MESSAGES_PAGE = 'SET_MESSAGES_PAGE';
const SET_COMPANION = 'SET_COMPANION';
const CLEAR_MESSAGES = 'CLEAR_MESSAGES';
const ADD_DEL_MESSAGE = 'ADD_DEL_MESSAGE';
const RESTORE_DEL_MESSAGE = 'RESTORE_DEL_MESSAGE';
const COUNT_NEWMESSAGES = 'COUNT_NEWMESSAGES';

let initialState = {
    dialogs: [],
    currentCompanionId: null,
    currentCompanionName:null,
    currentCompanionPhoto:null,
    allMessages: [],
    messages:[],
    messagesPage: [],
    messagesPagesCount: null,
    deletedMessages: [],
    countNewElements: ""
};



const dialogsReducer = (state = initialState, action) =>{
    switch (action.type){
        case CLEAR_MESSAGES:
            return {
                ...state,
                messages: []
            };
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.messages]
            };
        case GET_MESSAGES:
            return {
                ...state,
                messages: [action.messages, ...state.messages]
            };
        case GET_DIALOGS:
            return {
                ...state,
                dialogs: [...state.dialogs,
                    [action.companion, action.newMessagesCount]]
            };
        case CLEAR_DIAOGS:
            return {
                ...state,
                dialogs: []
            };
        case SET_MESSAGES_PAGE:
            return {
                ...state,
                messagesPage: action.messagesPage,
                messagesPagesCount: action.messagesPagesCount
            };
        case SET_COMPANION:
            return {
                ...state,
                currentCompanionId: action.currentCompanionId,
                currentCompanionName: action.currentCompanionName,
                currentCompanionPhoto: action.currentCompanionPhoto
            };
        case ADD_DEL_MESSAGE:
            return {
                ...state,
                deletedMessages: [...state.deletedMessages, action.messageId]
            };
        case RESTORE_DEL_MESSAGE:
            delElementFromArray(state.deletedMessages, action.messageId);
            return {
                ...state
            };
        case COUNT_NEWMESSAGES:

            return{
                ...state,
                countNewElements: action.countNewMessages
            };
        default:
            return state;
    }
}

const startChattingSuccess = (allMessages) =>
    ({type: GET_ALL_MESSAGES, allMessages});
const setMessagesFriend = (messages, type) => ({type: type, messages});
const getDialogsSuccess = (companion, newMessagesCount) =>
    ({type: GET_DIALOGS, companion, newMessagesCount});
const setMessagesPage = (messagesPage, messagesPagesCount) =>
    ({type: SET_MESSAGES_PAGE, messagesPage, messagesPagesCount});
const setCurrentCompanion =
    (currentCompanionId, currentCompanionName, currentCompanionPhoto) =>
        ({type:SET_COMPANION,
        currentCompanionId, currentCompanionName, currentCompanionPhoto});
const clearDialogs = () => ({type: CLEAR_DIAOGS});
const addDeletedMessageToState = (messageId) =>
    ({type: ADD_DEL_MESSAGE, messageId});
const restoreDeletedMessage = (messageId) =>
    ({type: RESTORE_DEL_MESSAGE, messageId});
const setCountNewMessages = (countNewMessages) =>
    ({type: COUNT_NEWMESSAGES, countNewMessages})
export const clearMessages = () => ({type: CLEAR_MESSAGES});

const getMessage = async (userId, currentPage=1, pageSize=20) =>
{
    const response = await dialogsAPI.getMessageFromFriend(userId, currentPage, pageSize);
    return response.data;
}
const getUserProfile = async (idUser) =>
{
    const userProfile = await profileAPI.getProfile(idUser);
    return userProfile;
}

const isCorrespondence = (allDialogs) => async (dispatch) =>
{
    for (const dialog of allDialogs) {
        // await delay(100);
        // const response = await getMessage(dialog.id);
        // const totalCount = response.totalCount;debugger
        // if (totalCount === 0) {
        //     continue;
        // }
        //let newMessagesCount = 0;
        await delay(50);
        const companion = await getUserProfile(dialog.id);
        //await profileAPI.getProfile(dialog.id);
        //if (dialog.hasNewMessages) {
        const newMessagesCount = dialog.newMessagesCount;
        //}
        dispatch(getDialogsSuccess(companion.data, newMessagesCount));
    }
}

export const getAllDialogs = () => async (dispatch) => {
    const response = await dialogsAPI.getAllDialogs();
    const allDialogs = response.data;
    dispatch(clearDialogs());
    dispatch(isCorrespondence(allDialogs));
}

export const startChatting = (userId) => async (dispatch) =>
{
    const response = await dialogsAPI.startChatting(userId);
    const allMessages = response.data;
    dispatch(startChattingSuccess(allMessages));
}

export const sendMessageToFriend = (userId, message, myForm) =>
    async (dispatch) =>
{
    const response = await dialogsAPI.sendMessageToFriend(userId, message);
    const newMessage = response.data.data.message;
    dispatch(setMessagesFriend([newMessage], SEND_MESSAGE));
    dispatch(reset(myForm));
}
export const getMessageFromFriend = (userId, pageSize=20) =>
    async (dispatch) =>
    {
        const messages = await getMessage(userId);
        const response = await profileAPI.getProfile(userId);
        const userName = response.data.fullName; 
        const userPhoto = response.data.photos.large;
        const messagesPage = 1;
        const totalPagesCount = messages.totalCount;
        const messagesPagesCount = getCountPages(totalPagesCount, pageSize).pagesCount;
        dispatch(clearMessages());
        dispatch(setMessagesFriend(messages.items, GET_MESSAGES));
        dispatch(setMessagesPage(messagesPage, messagesPagesCount));
        dispatch(setCurrentCompanion(userId, userName, userPhoto));
}

export const getMoreMessages = (userId, page) => async (dispatch) => {
    page++;
    const messages = await getMessage(userId, page);
    dispatch(setMessagesFriend(messages.items, GET_MESSAGES));
    dispatch(setMessagesPage(page));
}

export const deleteMessage = (messageId/*, userId*/) => async (dispatch) => {
    await dialogsAPI.deleteMessage(messageId);
    dispatch(addDeletedMessageToState(messageId));
    //dispatch(getMessageFromFriend(userId));
}

export const restoreMessageFormDeleted = (messageId/*, userId*/) => async (dispatch) => {
    await dialogsAPI.restoreMessageFormDeleted(messageId);
    dispatch(restoreDeletedMessage(messageId));
}

export const isYourMessageViewed = (messageId) => async (dispatch) => {
    return ( await dialogsAPI.isYourMessageViewed(messageId));
}

export const getCountNewMessages = () => async (dispatch)=> {
     const response = await dialogsAPI.getCountNewMessage();
     dispatch(setCountNewMessages(response.data));
}

export default dialogsReducer;
