import React from 'react';
import Img from 'react-image';
import avatarIconDefault1 from '../../../assets/images/avatars/avatar-icon-1.png';
import avatarIconDefault2 from '../../../assets/images/avatars/avatar-icon-2.png';
import avatarIconDefault3 from '../../../assets/images/avatars/avatar-icon-3.png';
import avatarIconDefault4 from '../../../assets/images/avatars/avatar-icon-4.png';

const UserPhotoDefault = () => (
  <Img
    src={[avatarIconDefault1,avatarIconDefault2,avatarIconDefault3,avatarIconDefault4]}
  />
)

const createArrayIcons = () => {
    let items = [];

    for (let i=0; i<20; i++) {
        items[i] = `/src/assets/images/avatars/avatar-icon-${i+1}.png`;
    }
    return items; debugger
}
export const photos = createArrayIcons();

export default UserPhotoDefault;
