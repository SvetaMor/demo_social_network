import profileReducer, {addPostActionCreator, deletePost} from './profile-reducer';

let state={
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount:'12'},
        {id: 2, message: 'It\'s my first post', likesCount:'50'}
    ]
};

it('length of post should be incremented', () => {
    let action = addPostActionCreator('new post text');
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
    let action = addPostActionCreator('new post text');
    let newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe("new post text");
});

it('after deleting length of post should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
});

it(`after deleting length of post shouldn't be decrement if id is incorect`, () => {
    let action = deletePost(100);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});
