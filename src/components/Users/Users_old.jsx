import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/imeges/user3.png';

const Users = (props)=>{
    let getUsers = () => {
        if (props.users.length === 0 ) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
                debugger;
                props.setUsers(response.data.items);
            });
            /* props.setUsers([
                {id:1, photoUrl: '', followed: true, fullname: 'Anna', status: 'I am a tiger',
                    location: {city: 'Moscow', country: 'Russia'} },
                {id:2, photoUrl: '', followed: false, fullname: 'Masha', status: 'I am a gorilla',
                    location: {city: 'Minsk', country: 'Belarus'} },
                {id:3, photoUrl: '', followed: false, fullname: 'Pavel', status: 'I am a dog',
                    location: {city: 'Novgorod', country: 'Russia'}}
            ]); */
        }
    };

    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
             props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null
                                ? u.photos.small
                                : userPhoto}
                            className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>);
}

export default Users;
