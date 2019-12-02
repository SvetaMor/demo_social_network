import React from 'react';
import FriendItem from './FriendItem';

const Friends = (props) =>
{
    let FriendElements = props.friendsPage.friends
        .map(f => <FriendItem name={f.name} key={f.id} id={f.id} img={f.photos.small} status={f.status}  />);

    return (
        <div >
            {FriendElements}
        </div>
    );
}
export default Friends;
