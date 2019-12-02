import React from 'react';
import avatarIconDefault1 from '../../../assets/images/avatars/avatar-icon-13.png';
import avatarIconDefault2 from '../../../assets/images/avatars/avatar-icon-2.png';
import avatarIconDefault3 from '../../../assets/images/avatars/avatar-icon-3.png';
import avatarIconDefault4 from '../../../assets/images/avatars/avatar-icon-4.png';
import avatarIconDefault5 from '../../../assets/images/avatars/avatar-icon-5.png';
import avatarIconDefault6 from '../../../assets/images/avatars/avatar-icon-6.png';
import avatarIconDefault7 from '../../../assets/images/avatars/avatar-icon-7.png';
import avatarIconDefault8 from '../../../assets/images/avatars/avatar-icon-8.png';
import avatarIconDefault9 from '../../../assets/images/avatars/avatar-icon-9.png';
import avatarIconDefault10 from '../../../assets/images/avatars/avatar-icon-10.png';
import avatarIconDefault11 from '../../../assets/images/avatars/avatar-icon-11.png';
import avatarIconDefault12 from '../../../assets/images/avatars/avatar-icon-12.png';

export const userDefaultPhotos = [avatarIconDefault1, avatarIconDefault2, avatarIconDefault3,
                                avatarIconDefault4, avatarIconDefault5, avatarIconDefault6,
                                avatarIconDefault7, avatarIconDefault8, avatarIconDefault9,
                                avatarIconDefault10, avatarIconDefault11, avatarIconDefault12
                                ];

export const getRandomIco = (userPhotos) => {
    let avatarUrl = userPhotos[Math.floor(Math.random()*userPhotos.length)];
    return avatarUrl;
}
