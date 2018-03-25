import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
// import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
// import Grid from 'material-ui/Grid';
import { Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../css/App.css';
import DropDownMenuTask from './DropDownMenu';
import {Link} from 'react-router-dom';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import axios from 'axios';
import { changeTaskStatus, liftProjectToState } from '../actions/index'



const style = {

  card_styleToDo: {
    width: 340,
    margin: 10,
    textAlign: 'center',
    background: '#FFFFA5'

  },
  card_styleProgress: {
    width: 340,
    margin: 10,
    textAlign: 'center',
    background: '#1ba8b1'

  },
  card_styleReview: {
    width: 340,
    margin: 10,
    textAlign: 'center',
    background: '#ff7455'

  },

  card_styleCompleted: {
    width: 340,

    margin: 10,
    textAlign: 'center',
    background: '#17F76A',
    justifyContent: 'center'

  }
}

const mapDispatchToProps = dispatch => {
  return {
    liftProjectToState: project => dispatch(liftProjectToState(project))
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    token: state.token,
    currentProject:state.currentProject
  }
}

class ConnectedKanbanBoard extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentProject: props.currentProject
    }
    this.moveTask = this.moveTask.bind(this)
  }

  moveTask (task, task_status) {
    if (task_status) {
      console.log('this is the task', task)
      console.log('this is the task_status', task_status);
      axios.put('/edit/taskstatus', {
        task,
        task_status
      }).then( result => {
        console.log(result.data)
        this.props.liftProjectToState(result.data)
      })
    }
  }

  componentWillMount() {
    console.log('BELOW IS STATE/PROJECT BEFORE MOUNT', this.props.currentProject)

  }



  render() {

    if (this.props.currentProject) {
      if (this.props.currentProject.tasks) {
        console.log('currentProject at RENDER',this.props.currentProject )

        // To Do
        var TasksToDo = this.props.currentProject.tasks.filter( task => {
          return task.task_status === "todo"
        })
        if (TasksToDo.length > 0) {
          var ToDoTaskItems = TasksToDo.map( (task, index) => {
            return <TaskItem style={style.card_styleToDo} task={task} moveTask={this.moveTask} key={index} />
          })
        }
        // In Progress
        var TasksInProgress = this.props.currentProject.tasks.filter( task => {
          return task.task_status === "progress"
        })
        if (TasksInProgress.length > 0) {
          var InProgressTaskItems = TasksInProgress.map( (task, index) => {
            return <TaskItem style={style.card_styleProgress} task={task} moveTask={this.moveTask} key={index} />
          })
        }
        // In Review
        var TasksInReview = this.props.currentProject.tasks.filter( task => {
          return task.task_status === "review"
        })
        if (TasksInReview.length > 0) {
          var InReviewTaskItems = TasksInReview.map( (task, index) => {
            return <TaskItem style={style.card_styleReview} task={task} moveTask={this.moveTask} key={index} />
          })
        }
        // Completed
        var TasksCompleted = this.props.currentProject.tasks.filter( task => {
          return task.task_status === "completed"
        })
        if (TasksCompleted.length > 0) {
          var CompletedTaskItems = TasksCompleted.map( (task, index) => {
            return <TaskItem style={style.card_styleCompleted} task={task} moveTask={this.moveTask} key={index} />
          })
        }
      }
    }




    return (
  <MuiThemeProvider>
      <div>
        <h2 className="kanban">Kanban Board</h2>
          <Row around="xs" middle="xs">
            <Col>
              <Row center="xs">
                <Col>
                  <h3 className="kanban">To Do</h3>
                </Col>
              </Row>
              {ToDoTaskItems || <TaskItem style={style.card_styleToDo}/>}
          </Col>

        <Col>
          <Row center="xs">
            <Col>
              <h3 className="kanban">In Progress</h3>
            </Col>
          </Row>
            {InProgressTaskItems || (<TaskItem style={style.card_styleProgress} />)}
        </Col>

        <Col>
          <Row center="xs">
            <Col>
              <h3 className="kanban">In Review</h3>
            </Col>
          </Row>
            {InReviewTaskItems || (<TaskItem style={style.card_styleReview} />)}
        </Col>

        <Col>
          <Row center="xs">
            <Col>
              <h3 className="kanban">Completed</h3>
            </Col>
          </Row>
            {CompletedTaskItems || (<TaskItem style={style.card_styleCompleted} />)}

        </Col>
      </Row>
    </div>
  </MuiThemeProvider>
    );
  }
}


const KanbanBoard = connect(mapStateToProps, mapDispatchToProps)(ConnectedKanbanBoard)
export default KanbanBoard;
