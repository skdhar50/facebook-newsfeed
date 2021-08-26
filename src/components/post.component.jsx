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
                            <IconButton aria-label="settings">
                              <MoreHorizIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
                                <Menu
                                    id="fade-menu"
                                    anchorEl={anchorEl}
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
                            </IconButton>
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

                    <Actions />
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


