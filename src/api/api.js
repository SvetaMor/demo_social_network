import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "1169b1b0-c852-4276-b653-e4b8ed86fe3e"
        //"API-KEY": "fb2b16a6-cd6b-4f77-89a5-3fbfbb937043"
    }
});



export const usersAPI = {
    getUsers(currentPage=1, pageSize=10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
    },
    getListOfUsers() {
        return instance.get(`users`)
        .then(response => {
            return response.data;
        });
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`);
    },
    follow(userId){
        return instance.post(`follow/${userId}`);
    },
    isFollowed(userId){
        return instance.get(`follow/${userId}`)
        .then(response => {
            return response.data;
        });
    }//,
    // getProfile(userId){
    //     console.warn('Obsolete method. Please use profileAPI object.');
    //     return profileAPI.getProfile(userId);
    // }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    },
    savePhoto(filePhoto) {
        const formData = new FormData();
        formData.append("image", filePhoto);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile);
    }
}

export const authAPI = {
    me(){
        return instance.get('auth/me');
    },
    login(email, password, rememberMe=false, captcha=null){
        return instance.post('auth/login', {email, password, rememberMe, captcha});
    },
    logout(){
        return instance.delete('auth/login');
    }
}

export const securityAPI = {
    getCaptchaUrl(){
        return instance.get('security/get-captcha-url');
    }
}

export const dialogsAPI = {
    getAllDialogs(){
        return instance.get(`dialogs`);
    },
    startChatting(userId){
        return instance.put(`dialogs/${userId}`, {userId});
    },
    getMessageFromFriend(userId, currentPage=1, pageSize=20){
        return instance.get(`dialogs/${userId}/messages?page=${currentPage}&count=${pageSize}`);
    },
    sendMessageToFriend(userId, body){
        return instance.post(`dialogs/${userId}/messages`, {userId, body});
    },
    isYourMessageViewed(messageId){
        return instance.get(`dialogs/messages/${messageId}/viewed`);
    },
    deleteMessage(messageId){
        return instance.delete(`dialogs/messages/${messageId}`);
    },
    restoreMessageFormDeleted(messageId){
        return instance.put(`dialogs/messages/${messageId}/restore`);
    },
    getCountNewMessage(){
        return instance.get(`dialogs/messages/new/count`);
    }
}
