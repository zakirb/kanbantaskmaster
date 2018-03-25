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
  card_styleFinished: {
    width: 340,
    margin: 10,
    textAlign: 'center',
    background: '#17F76A',
    justifyContent: 'center'

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
    super()
    this.state = {
      currentProject: props.currentProject
    }
  }
  render() {
    // console.log('currentProject')
    // console.log(this.state.currentProject)

  // To Do
  // var TasksToDo = this.props.currentProject.tasks.filter( task => {
  //   return task.task_status === "ToDo"
  // })
  // var ToDoTaskItems = TasksToDo.map(task => {
  //   return <TaskItem style={style.card_styleToDo} />
  // })

  //In Progress
  // var TasksInProgress = this.props.currentProject.tasks.filter( task => {
  //   return task.task_status === "InProgress"
  // })
  // var InProgressTaskItems = TasksInProgress.map(task => {
  //   <TaskItem style={style.card_styleProgress} />
  // })

  //In Review
  // var TasksInReview = this.props.currentProject.tasks.filter( task => {
  //   return task.task_status === "InReview"
  // })
  // var InReviewTaskItems = TasksInReview.map(task => {
  //   <TaskItem style={style.card_styleReview} />
  // })

  //Finished
  // var TasksFinished = this.props.currentProject.tasks.filter( task => {
  //   return task.task_status === "Finished"
  // })
  // var FinishedTaskItems = TasksFinished.map(task => {
  //   <TaskItem style={style.card_styleFinished} />
  // })



// console.log(ToDoTaskItems)




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
                <TaskItem style={style.card_styleToDo} />
          </Col>

        <Col>
          <Row center="xs">
            <Col>
              <h3 className="kanban">In Progress</h3>
            </Col>
          </Row>
            <TaskItem style={style.card_styleProgress} />
        </Col>

        <Col>
          <Row center="xs">
            <Col>
              <h3 className="kanban">In Review</h3>
            </Col>
          </Row>
            <TaskItem style={style.card_styleReview} />
        </Col>

        <Col>
          <Row center="xs">
            <Col>
              <h3 className="kanban">Finished</h3>
            </Col>
          </Row>
            <TaskItem style={style.card_styleFinished} />

        </Col>
      </Row>
    </div>
  </MuiThemeProvider>
    );
  }
}


const KanbanBoard = connect(mapStateToProps, null)(ConnectedKanbanBoard)
export default KanbanBoard;
