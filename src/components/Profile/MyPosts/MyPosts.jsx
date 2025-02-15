import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';
import {required, maxLengthCreator} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';


const MyPosts = React.memo( props => {
    // shouldComponentUpdate(nextProps, nextState){
    //     return nextProps != this.props || nextState != this.state;
    // }
    //render(){
        console.log('render yo');
        let postsElements = props.posts.map(p =>
            <Post key={p.id} message={p.message} likesCount={p.likesCount} />);
        let onAddPost = (values) =>{
            //alert(values.newPostText);
            props.addPost(values.newPostText);
        };
        return(
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <AddNewPostFormRedux onSubmit={onAddPost} />
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        );
    //}
});

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPostText'} validate={[required, maxLength10]} placeholder='Post message' />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'profileAddNewPostsForm'})(AddNewPostForm)

export default MyPosts;
