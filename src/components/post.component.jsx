import React from 'react';
import Actions from './actions.component';
import Comments from './comments.component';
import SimpleDialog from './simple-dialog.component';
import PostEdit from './post-edit.component';
import PostDelete from './post-delete.component';
import PostSettingMenu from './post-setting-menu.component';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            openDeleteModal: false,
            anchorEl: null,
            showComments: false
        }
    }

    handleShowComments = () => {
        this.setState({showComments: !(this.state.showComments)});
    }

    handleClick = (event) => {
        this.setState({anchorEl: event.currentTarget});
    };
  
    handleClose = () => {
        this.setState({anchorEl: !Boolean(this.state.anchorEl)});
    };

    handleClickOpen = (value) => {
        this.setState({anchorEl: value});
        this.setState({openModal: value});
        this.setState({openDeleteModal: value});
    };

    render() {
        const {
            id,
            body,
            like,
            name,
            time,
            proPic,
            isLiked,
            comments,
            onEditPost,
            onLikeAction,
            onAddComment,
            onDeletePost
        } = this.props;

        return (
            <>
                <SimpleDialog
                    title="Edit Post"
                    open={Boolean(this.state.openModal)}
                >
                    <PostEdit
                        id={id}
                        body={body}
                        onEditPost={onEditPost}
                        handleClickOpen={this.handleClickOpen}
                    />
                </SimpleDialog>

                <SimpleDialog
                    title="Delete Post"
                    open={Boolean(this.state.openDeleteModal)}
                >
                    <PostDelete
                        id={id}
                        onDeletePost={onDeletePost}
                        handleClickOpen={this.handleClickOpen}
                    />
                </SimpleDialog>


                <Container maxWidth="sm" style={{ backgroundColor: 'lightgray', padding: '0.5em' }}>
                    <Card variant="outlined">
                        <CardHeader
                            avatar={
                                <Avatar alt="Avatar" src={proPic} />
                            }
                            action={
                                <div>
                                    <PostSettingMenu
                                        id={id}
                                        handleClick={this.handleClick}
                                        anchorEl={this.state.anchorEl}
                                        onEditPost={() => this.setState({openModal: true})}
                                        onDeletePost={() => this.setState({openDeleteModal: true})}
                                    />
                                </div>
                            }
                            title={name}
                            subheader={`posted ${time}h ago`}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textPrimary" component="p">
                            {
                                body
                            }
                            </Typography>
                        </CardContent>
                        
                        <div style={{
                            display: 'flex',
                            justifyContent:"space-between",
                            flexDirection: 'row',
                            marginLeft: "10px",
                            marginRight: "30px"
                        }}>
                            <Typography variant="subtitle1" color="textPrimary">
                                {like} likes
                            </Typography>
                            <Typography variant="subtitle1" color="textPrimary" style={{color:"#a6acb3", cursor: "pointer"}}>
                                {comments.length} Comments
                            </Typography>
                        </div>

                        <Actions
                            id={id}
                            isLiked={isLiked}
                            onLikeAction={onLikeAction}
                            handleShowComments={this.handleShowComments}
                        />

                        {
                            this.state.showComments &&
                            <Comments
                                userPic={proPic}
                                userId={id}
                                onAddComment={onAddComment}
                                comments={comments}
                            />
                        }
                    </Card>
                </Container>
            </>
        )
    }
}

export default Post;