import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpeANnVzE_pT-gB4qbM8MNnol_ezD1a0vS_tOLXVULNxKULGzx5g'},
                {id: 2, name: 'Andrey', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4dLBe7Sc_1IIJtWboXOqbO_h20al6fxAtbiw4Au1ZQ4GTD7t_xg'},
                {id: 3, name: 'Valera', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlEeD9umlTl6KHEfysX_hCAhuLAKL-WOBpJQqCXAGmhetMEcLqNA'},
                {id: 4, name: 'Sveta', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcpANj_2I8ZL9V1eXglRisRbrlA0Mz-PZzVRpPsW0y3TjUbYJE'},
                {id: 5, name: 'Sasha', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJpmfj5hm9-WL1GZ8hbV9PD7Q98W6nXc8p1rt34_pTlgpA90L3'},
                {id: 6, name: 'Viktor', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyO4iUhvQmVWlkxc-IBTryx4qv4lQKxv_fq1eiQ_NaEolP30mPAg'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your react?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageBody: ""
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount:'12'},
                {id: 2, message: 'It\'s my first post', likesCount:'50'}
            ],
            newPostText: 'new text'
        },
        sideBar: {
            friends: [
                {id: 1, name: 'Anna'},
                {id: 2, name: 'Pavel'},
                {id: 3, name: 'Nikita'}
            ]
        }
    },
    _callSubscriber () {
            console.log('state was changed');
    },
    getState(){
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch (action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage =dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    }
}

window.store=store.getState();

export default store;
