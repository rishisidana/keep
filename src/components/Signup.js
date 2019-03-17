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


class Signup extends Component {
    dataval;
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            password: "",
            tasks: []
        }
        this.onSignUpButton = this.onSignUpButton.bind(this);
    }

    saveNewUser(){
    
        console.log("save request body ",this.saveJson)
        fetch('http://localhost:3000/users/',
            {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(this.saveJson), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(response => alert(" welcome "))
            .catch(error => alert("already exist"));
    }

    
    onSignUpButton(e) {
        e.preventDefault();
        var userName = document.getElementById("userNameFromSignUp").value;
        var passWord = document.getElementById("passwordFromSignUp").value;
        console.log("request data uname and pass ",userName+passWord);
        this.saveJson={
            "id":userName,
            "password":passWord,
            "tasks":[]
        }
        // this.setState(
        //     (currState) => ({
        //         "id":userName,
        //         "password":passWord,
        //         "tasks":[]
        //     })
        // )
       console.log("Body to send for save",this.saveJson)
        this.saveNewUser()
    }

    render() {
        const { classes, theme } = this.props;
            return (
                <div className="main">
                    <CssBaseline />
                    <Paper className="paper">
                    <Avatar className="avatar">
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <div className="form" >
                    <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input id="userNameFromSignUp" name="email" autoComplete="email" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input name="password" type="password" id="passwordFromSignUp" autoComplete="current-password" />
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
                    onClick={this.onSignUpButton}
                    >
                    Sign in
                    </Button>
                </div>
                </Paper>
            </div>
            )
    }
}

export default Signup;
