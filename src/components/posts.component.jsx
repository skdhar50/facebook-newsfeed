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

        const { comments } = this.state.posts[postId-1];
        comments.push( new_comment )
        
        this.setState({
            posts: this.state.posts
        })
    }

    handleLike = (value, status, id) => {
        const temp = {...this.state.posts};
        temp[id].isLiked = status;
        temp[id].like += value;

        this.setState({
            posts: this.state.posts
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(({userId, ...otherPosts}) =>
                        <Post key={userId} id={userId} onLikeAction={this.handleLike} onAddComment={this.handleAddComment} { ...otherPosts } />
                    )
                }
            </div>
        )
    }
}

export default Posts;