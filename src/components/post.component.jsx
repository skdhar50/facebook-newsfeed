import React from 'react';
import Actions from './actions.component';
import Comments from './comments.component';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';


const Post = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    // console.log(props.onAddComment);

    return (
        <div>
            <Container maxWidth="sm" style={{ backgroundColor: 'lightgray', padding: '0.5em' }}>
                <Card variant="outlined">
                    <CardHeader
                        avatar={
                            <Avatar alt="Avatar" src={props.proPic} />
                        }
                        action={
                            <div>
                                <IconButton aria-label="settings" onClick={handleClick}>
                                    <MoreHorizIcon aria-controls="simple-menu" aria-haspopup="true" />
                                </IconButton>
                                <Menu
                                    id="fade-menu"
                                    anchorEl={anchorEl}
                                    getContentAnchorEl={null} // if not given then it will generate an error
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    TransitionComponent={Fade}
                                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                                >
                                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                                </Menu>
                            </div>
                        }
                        title={props.name}
                        subheader={`posted ${props.time}h ago`}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textPrimary" component="p">
                        {
                            props.body
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
                        <Typography variant="subtitle1" color="textPrimary">{props.like} likes</Typography>
                        <Typography variant="subtitle1" color="textPrimary" style={{color:"#a6acb3", cursor: "pointer"}}>{props.comments.length} Comments</Typography>
                    </div>
                    <Actions id={props.id} isLiked={props.isLiked} onLikeAction={props.onLikeAction} />
                    <Comments
                        userPic={props.proPic}
                        userId={props.id}
                        onAddComment={props.onAddComment}
                        comments={props.comments}
                    />
                </Card>
            </Container>
        </div>
    )
}

export default Post;


