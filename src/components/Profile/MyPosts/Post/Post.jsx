import React from 'react';
import prof from './Post.module.css';

const Post = (props) => {
    console.log(props.message);
    return(
        <div className={prof.item}>
            <img src='https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg' alt=''/>
            {props.message}
            <div>
                <span>count of likes is {props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;
