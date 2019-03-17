import React, { Component } from 'react';
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

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
    }

    async fetchdetails(id) {
        return await fetch('http://localhost:3000/users/' + id).then(function (response) {
            return response.json();
        });
    }

    async onLoginSubmit(e) {
        e.preventDefault();
        console.log("rishi");
        var userName = document.getElementById("userName").value;
        var passWord = document.getElementById("password").value;
        console.log(userName);
        console.log(passWord);
        await this.fetchdetails(userName).then((data) => {
            console.log(data);

            if (data.password === passWord) {
                console.log("this in if condition"+userName);
                this.props.login(userName,passWord,data.tasks);
            }
            else {
                this.props.login("");
            }
        });
        console.log("onLoginSubmit completed")
    }

    render() {
            return (
                <div className="main">
                    <CssBaseline />
                    <Paper className="paper">
                    <Avatar className="avatar">
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                            LogIn
                    </Typography>
                    <div className="form">
                    <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input id="userName" name="email" autoComplete="email" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input name="password" type="password" id="password" autoComplete="current-password" />
                    </FormControl>
                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="submit"
                    onClick={this.onLoginSubmit}
                    >
                    LogIn
                    </Button>
                </div>
                </Paper>
            </div>
            )
    }
}

export default Login;
