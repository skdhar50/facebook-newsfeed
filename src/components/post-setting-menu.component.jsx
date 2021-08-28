import React from 'react';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

const PostSettingMenu = (props) => {
    const {
        id,
        anchorEl,
        onEditPost,
        handleClose,
        handleClick,
        onDeletePost,
    } = props;

    return (
        <>
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
                <MenuItem onClick={onEditPost}>Edit</MenuItem>
                <MenuItem onClick={() => onDeletePost(id)}>Delete</MenuItem>
            </Menu>
        </>
    )
}

export default PostSettingMenu;