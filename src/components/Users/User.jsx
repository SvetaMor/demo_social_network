import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user3.png';
import {NavLink} from 'react-router-dom';
//import Paginator from '../common/Paginator/Paginator';

const User = ({user, followingInProgress, follow, unfollow}) => {
    return (
             <div>
                <span key={user.id}>
                    <div>
                        <NavLink to={'/profile/'+user.id}>
                            <img src={user.photos.small != null
                                    ? user.photos.small
                                    : userPhoto}
                                className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id=> id===user.id)} onClick={()=>{unfollow(user.id)}}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id=> id===user.id)} onClick={()=>{follow(user.id)}}>Follow</button>}
                    </div>
                </span>
                <div>{user.name}</div>
                <div>{user.status}</div><br/>
                <div>{/*"user.location.city"*/}</div>
                <div>{/*"user.location.country"*/}</div>
            </div>)


}


export default User;
