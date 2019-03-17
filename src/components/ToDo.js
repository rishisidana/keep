import React , {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../css/List.css'

class ToDo extends Component {
    constructor(props){
        super(props)
        this.handleOnRemove = this.handleOnRemove.bind(this);
    }
    handleOnRemove(e){
        this.props.removeFromToDoTasks(e.target.value);
    }
    render() {
        return (      
            <div>
                <li>
                <Card className="card">
                    <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {this.props.todo.noteTitle}
                        </Typography>
                        <Typography component="p">
                        {this.props.todo.noteDescription}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                    <button onClick={this.handleOnRemove} value={this.props.todo.id}>
                    Remove
                    </button>
                        </Button>
                    </CardActions>
                    </Card>
                    </li>
                
            </div>
        );
    }
}

export default ToDo;
