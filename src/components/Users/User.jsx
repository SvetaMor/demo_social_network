import React from 'react';
import styles from './Users.module.css';
import {NavLink} from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';
import {withUserDefaultPhoto} from '../../hoc/withUserDefaultPhoto';

const User = ({user, followingInProgress, follow, unfollow, userPhoto}) => {
    return (
         <Card key={user.id} className={styles.userCard}>
                    <NavLink exact to={'/profile/'+user.id}>
                        <Card.Img variant="top" src={user.photos.small != null
                                ? user.photos.small
                                : userPhoto}
                            className={styles.userPhoto}/>
                    </NavLink>
                    <Card.Body>
                    <h6><b>{user.name}</b></h6>
                    <p>{user.status}</p>
                    <div>{/*"user.location.city"*/}</div>
                    <div>{/*"user.location.country"*/}</div>
                    {user.followed
                            ? <Button block variant="outline-info"  disabled={followingInProgress.some(id=> id===user.id)} onClick={()=>{unfollow(user.id)}}>Unfollow</Button>
                            : <Button block variant="outline-info"  disabled={followingInProgress.some(id=> id===user.id)} onClick={()=>{follow(user.id)}}>Follow</Button>}
                    </Card.Body>
                </Card>
            )
}

export default withUserDefaultPhoto(User);
