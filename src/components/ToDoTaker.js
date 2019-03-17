import React , {Component} from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import '../css/Home.css';

class ToDoTaker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskTitle: "",
            taskValue: ""
        }
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnChangeTitle = this.handleOnChangeTitle.bind(this);
        this.handleOnChangeValue = this.handleOnChangeValue.bind(this);
    }
    handleOnSubmit(e) {
        e.preventDefault();
        this.props.handleFromToDoApp(this.state.taskTitle,this.state.taskValue);
        this.setState({
            taskTitle: "",
            taskValue: ""
        })
    }
    handleOnChangeTitle(e) {
        this.setState({
            taskTitle: e.target.value
        })
    }
    handleOnChangeValue(e) {
        this.setState({
            taskValue: e.target.value
        })
    }
    render() {
        return (
            <center>
                <div className="main">
                    <CssBaseline />
                    <Paper className="paper">
                    <div className="form">
                    <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="Title">Title</InputLabel>
                    <Input id="userName" name="email" autoComplete="email" autoFocus onChange={this.handleOnChangeTitle} value={this.state.taskTitle}/>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="Task">Task</InputLabel>
                    <Input name="password" type="password" id="password" autoComplete="current-password"  onChange={this.handleOnChangeValue} value={this.state.taskValue}/>
                    </FormControl>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="submit"
                    onClick={this.handleOnSubmit}
                    >
                    Submit
                    </Button>
                </div>
                </Paper>
            </div>
            </center>
        );
    }
}

export default ToDoTaker;