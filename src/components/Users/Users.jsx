import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import {CardColumns} from 'react-bootstrap';

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, portionSize, users,  ...props}) => {
        return <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount} pageSize={pageSize} portionSize={portionSize}/>
            <CardColumns>
                {
                 users.map(u => <User user={u}
                                    followingInProgress={props.followingInProgress}
                                    unfollow={props.unfollow}
                                    follow={props.follow}

                                    key={u.id}
                     />)
                 }
             </CardColumns>
    </div>
}


export default Users;
