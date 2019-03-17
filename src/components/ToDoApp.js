import React, { Component } from 'react';
import ToDoHeader from './ToDoHeader';
import ToDoTaker from './ToDoTaker';
import ToDoList from './ToDoList';
import Login from './Login';
import Signup from './Signup';

class ToDoApp extends Component {
    dataval;
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            password: "",
            tasks: []
        }

        if (this.state.id != "") {
            this.GetDetailsOfUser();
        }

        this.GetDetailsOfUser = this.GetDetailsOfUser.bind(this);
        this.handleFromToDoApp = this.handleFromToDoApp.bind(this);
        this.removeFromToDoTasks = this.removeFromToDoTasks.bind(this);
        this.onClickLogout = this.onClickLogout.bind(this);
        this.getLoginId = this.getLoginId.bind(this);
    }

    GetDetailsOfUser() {
        this.fetchdetails(this.state.id).then((data) => {
            this.setState(
                (currState) => ({
                    tasks: currState.tasks.concat(data.tasks)
                })
            )
        });
    }
    postMyNotes() {
        this.saveData = {
            "password": this.state.password,
            "tasks": this.state.tasks
        }

        return fetch('http://localhost:3000/users/' + this.state.id,
            {
                method: 'PUT',
                body: JSON.stringify(this.saveData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    }

    async fetchdetails(id) {
        return await fetch('http://localhost:3000/users/' + id).then(function (response) {
            return response.json();
        });
    }

    handleFromToDoApp(taskTitle,taskValue) {
        const newState = [{
            id: Math.random() * 340293842,
            "noteTitle": taskTitle,
            "noteDescription": taskValue
        }];
        this.setState(
            (currState) => ({
                tasks: currState.tasks.concat(newState)
            })
        )
    }

    removeFromToDoTasks(taskId) {
        this.setState(
            (currState) => ({
                tasks: currState.tasks.filter(task => task.id != taskId)
            })
        );
    }
    onClickLogout() {
        this.setState(
            (currState) => ({
                id: "",
                password:"",
                tasks: []
            })
        );
    }
    

    getLoginId(userName,passWord,taskList){
        this.setState(
            (currState) => ({
                id: userName,
                password: passWord,
                tasks: currState.tasks.concat(taskList)
            })
        );
    }

    render() {
        if (this.state.id != "") {
            this.postMyNotes();
            return (
                <div>
                    <div><ToDoHeader title={this.state.id} logout={this.onClickLogout} /></div>
                    <div><ToDoTaker handleFromToDoApp={this.handleFromToDoApp} /></div>
                    <div><ToDoList tasks={this.state.tasks} removeFromToDoTasks={this.removeFromToDoTasks} /></div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <center>
                        <div><Login login={this.getLoginId}/></div><br></br><br></br><br></br><br></br>
                        <div><Signup /></div>
                    </center>
                </div>
            )
        }
    }
}

export default ToDoApp;
