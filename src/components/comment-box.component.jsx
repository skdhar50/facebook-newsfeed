import React from 'react';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getDefaultState();
    }

    getDefaultState = () => {
        return { comments: '' };
    }

    handleChange = (event) => {
        this.setState({ comments: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(this.props.userId)

        if( this.state.comments !== '' ) {
            const new_comment = {
                "userId": this.props.userId,
                "id" : Math.random(),
                "proPic": this.props.userPic,
                "body": this.state.comments
            }

            this.setState(this.getDefaultState());  // resetting the state into the initial state
            this.props.onAddComment( new_comment , this.props.userId );
        }
    }
    
    render() {

        return (
            <div style={{display: 'flex', margin: '10px'}}>
                <Avatar alt="Avatar" src={this.props.userPic} />
                <form onSubmit={this.handleSubmit} noValidate autoComplete="off" style={{width: '480px', display: 'flex'}}>
                    <TextField
                        variant="outlined"
                        placeholder="Comment"
                        color="primary"
                        fullWidth
                        value={this.state.comments}
                        onChange={this.handleChange}
                        style={{ marginLeft: '10px' }}
                    />
                    {/* <SendIcon type="submit" style={{cursor: "pointer", color: '#cfccc6'}} /> */}
                    <Button
                        variant='contained'
                        color='primary'
                        size='small'
                        endIcon={<SendIcon style={{fontSize: '30px'}} />}
                        type='submit'
                        style={{
                            marginLeft: '10px',
                            backgroundColor: '#4685b3'
                        }}
                    />
                </form>
            </div>
        )
    }
}

export default CommentBox;