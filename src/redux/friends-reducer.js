import {usersAPI} from '../api/api';
import {getCountPages} from '../utils/object-helpers';
import delay from 'delay';

const SET_FRIENDS = 'SET_FRIENDS';
const CLEAR_FRIENDS = 'CLEAR_FRIENDS';

let initialState = {
    friends: []
};

const friendsReducer = (state = initialState, action) =>{
    switch (action.type){
        case SET_FRIENDS:
            return{
                ...state,
                friends: [...state.friends, action.friends]
            }
        case CLEAR_FRIENDS:
            return{
                ...state,
                friends: []
            }
        default:
            return state;
    }
}

const setFriends = (friends) => ({type: SET_FRIENDS, friends});
const clearFriends = () => ({type: CLEAR_FRIENDS});

const getFriends=(pages)=> async (dispatch) => {
      for (const page of pages) {
        const response = await usersAPI.getUsers(page,100);
        const friends = response.items.filter(user => user.followed === true);
        //console.log(friends);
        //debugger
        friends.map(item =>dispatch(setFriends(item)));
        await delay(50);
      }
     // console.log('Done!');
}

export const getUsersArrayFollowed =()=> async (dispatch) => {
    const pageSize = 100
    const response = await usersAPI.getListOfUsers();
    const totalCount = response.totalCount;
    const pages = getCountPages(totalCount, pageSize).pages;
    dispatch(clearFriends());
    dispatch(getFriends(pages));
}

export default friendsReducer;
