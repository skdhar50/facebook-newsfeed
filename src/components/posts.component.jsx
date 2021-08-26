import React from 'react';
import {INITIAL_VALUE} from '../data';
import Post from './post.component';

class Posts extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: INITIAL_VALUE
        };
    }

    handleAddComment = ( new_comment, postId ) => {
        console.log(postId);
        // const new_state = {...this.state.posts };
        const { comments } = this.state.posts[postId-1];
        // new_state.posts.comment.push( new_comment );
        // let {comments} = new_state;
        // console.log(new_state);
        comments.push( new_comment );
        console.log(comments, new_comment);

        // this.setState.posts[postId-1].comments.push( new_comment );

        console.log(this.state.posts)
        
        this.setState({
            posts: this.state.posts
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(({userId, ...otherPosts}) =>
                        <Post key={userId} id={userId} onAddComment={this.handleAddComment} { ...otherPosts } />
                    )
                }
            </div>
        )
    }
}

export default Posts;