import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import DatePicker from 'material-ui/DatePicker';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Row, Col } from 'react-flexbox-grid';

// const mapDispatchToProps = dispatch => {
//   return {
//     addProject: project => dispatch(addProject(project))
//   }
// }
const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card_style: {
    width: 300,
    height: 400,
    margin: 5,
    textAlign: 'center',
    background: '#17CBF7'
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    token: state.token,
    currentProject: state.currentProject
  }
}

////// EDIT TASK FORM ///////////
class ConnectedEditTasks extends Component {
  constructor(props) {
    super()
    this.state = {
      description: '',
      assignTo:'',
      connectedDate: null,
      targetDate:null,
      task_status: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
    var key = event.target.name
    this.setState({ [key]: event.target.value})
  }

  handleDateChange = (event, date) => {
    var targetDate = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
      }

    this.setState({
      connectedDate: date,
      targetDate: date
    })
  }

  // ADDED //
  componentDidMount(){
    console.log("in componentDidMount editTask")
    // axios.post('view/findOne/task', {
    //   project_id: this.state.task._id
    // }).then( result => {
    //   console.log("result ", result)
    //   this.setState({
    //     currentTask: result.data
    //   })
    // })
  }

  handleSubmit(e) {
    // if (!this.canBeSubmitted()){
    //   e.preventDefault()
    //   return;
    // }
    e.preventDefault()
    axios.post('/edit/task',{
      description: this.state.description,
      assigned_to: this.state.assignTo,
      target_date:this.state.targetDate,
      task_status: this.state.task_status,
      project_id: this.props.currentProject._id
    }).then( result => {
      console.log(result.data)
      console.log('THIS IS THE RESULT AFTER POSTING FROM CreateProjectForm')
      // this.props.liftProjectToState
      console.log('THIS IS THE RESULT AFTER PROJECT IS LIFTED')
      // Redirect to a react route
    })
  }

  //description, target_date, status [todo in progress in review completed], assignto, steps, tasks, projectid
  render() {
    const { description, assignTo, connectedDate, task_status} = this.state
    return (
      <Row center="xs">
        <Col>
          <Card style={style.card_style} zDepth={5}>
            <form onSubmit={this.handleSubmit}>
              <h3>Edit Task Form</h3>
              <p>Edit To Do</p>
                <input type='text' className="input" placeholder="To Do" name='description' value={description} onChange={this.handleChange} />
              <p>Edit Team Member</p>
                <input type='text' className="input" placeholder="Team Member" name='assignTo' value={assignTo} onChange={this.handleChange} />
              <p>Task Status</p>
                <select name="task_status" value={task_status} onChange={this.handleChange}>
                  <option value="todo">To Do</option>
                  <option value="progress">In Progress</option>
                  <option value="review">In Review</option>
                  <option value="completed">Completed</option>
                </select>
                {/* <input type='text' className="input" placeholder="Task Status" name='task_status' value={task_status} onChange={this.handleChange} /> */}
                {/* <DropDownMenuTask /> */}
              <p>Edit Due Date</p>
              <DatePicker hintText="Due Date" value={connectedDate} onChange={this.handleDateChange} container="inline" />
              <CardActions>
                <FlatButton type="submit" label="Update Task" />
              </CardActions>
            </form>
          </Card>
        </Col>
      </Row>
    )
  }
}

const EditTasks = connect(mapStateToProps, null)(ConnectedEditTasks)
export default EditTasks;
