import {profileAPI, usersAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const ADD_POST='ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST ='DELETE_POST';
const SAVE_PHOTO = 'SAVE_PHOTO';
const SAVE_PROFILE = 'SAVE_PROFILE';
const SET_FOLLOWED = 'SET_FOLLOWED';

let initialState={
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount:'12'},
        {id: 2, message: 'It\'s my first post', likesCount:'50'}
    ],
    profile: null,
    status: "",
    isFollowed: false
};

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case SAVE_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        case SAVE_PROFILE: {
            return {
                ...state,
                profile: {...state.profile}
            }
        }
        case SET_FOLLOWED:{
            return {
                ...state,
                isFollowed: action.isFollowed
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type:ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO, photos});
export const saveProfileSuccess = (profile) => ({type: SAVE_PROFILE, profile});
const setFollowed = (isFollowed) => ({type: SET_FOLLOWED, isFollowed});

export const profileThunkCreator = (userId) => async (dispatch) =>{
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
    let isFollowed = await usersAPI.isFollowed(userId);
    dispatch(setFollowed(isFollowed));
}

export const getStatus = (userId) => async (dispatch) => { 
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0){
            dispatch(setStatus(status));
        }
    } catch (error) {
        //create dialog window
    }

}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0){
        dispatch(profileThunkCreator(userId));
    } else {
        const message = response.data.messages.length>0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('editProfile', {_error: message}));
        //dispatch(stopSubmit('editProfile', {"contacts": {"facebook": message}}));
        return Promise.reject(message);
    }
}

export default profileReducer;
