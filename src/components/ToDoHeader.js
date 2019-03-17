import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../css/Header.css';
class ToDoHeader extends Component {
    constructor(props) {
        super(props);
        this.onLogoutSubmit = this.onLogoutSubmit.bind(this);
    }
    onLogoutSubmit(){
        this.props.logout();
    }
    render() {
        return (
            <div className="root">
            <AppBar position="static">
                <Toolbar>
                <IconButton className="menuButton" color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" className="grow">
                {this.props.title}
                </Typography><div align="right">
                <Button color="inherit" onClick={this.onLogoutSubmit} >Logout</Button></div>
                </Toolbar>
            </AppBar>
            </div>
        );
    }
}

export default ToDoHeader;