import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const Comment = (props) => {
    return (
        <>
            <CardContent style={{display: 'flex'}}>
                <Avatar alt="Avatar" src={ props.proPic } />
                <Typography variant="body2" color="textPrimary" component="p" style={{padding: '10px', marginLeft: '5px', backgroundColor: '#edebe4', borderRadius: '20px'}}>
                    { props.body }
                </Typography>
            </CardContent>
        </>
    )
}

export default Comment;