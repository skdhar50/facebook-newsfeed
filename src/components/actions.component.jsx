import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import Divider from '@material-ui/core/Divider';

const Actions = () => {
    return (
        <>
            <CardActions disableSpacing>
            <div style={{
                    display: 'flex',
                    alignItems: 'stretch',
                    width: '100%',
                    justifyContent:"space-between",
                    flexDirection: 'row',
                }}
                >
                    <div>
                        <IconButton aria-label="like" style={{borderRadius: 0, padding: '10px 50px'}}>
                            <ThumbUpAltOutlinedIcon />
                            <Typography style={{marginLeft:'5px'}} color="textPrimary" component="p">Like</Typography>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton aria-label="comment" style={{borderRadius: 0, padding: '10px 50px'}}>
                            <ChatBubbleOutlineIcon />
                            <Typography style={{marginLeft:'5px'}} color="textPrimary" component="p">Comment</Typography>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton aria-label="share" style={{borderRadius: 0, padding: '10px 50px'}}>
                            <ShareIcon />
                            <Typography style={{marginLeft:'5px'}} color="textPrimary" component="p">Share</Typography>
                        </IconButton>
                    </div>
                </div>
            </CardActions>
            <Divider variant="middle" />
        </>
    );
}

export default Actions;