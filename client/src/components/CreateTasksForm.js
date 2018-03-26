import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import DatePicker from 'material-ui/DatePicker';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Row, Col } from 'react-flexbox-grid';
import { liftProjectToState } from "../actions/index";
import {Link} from 'react-router-dom'



const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card_style: {
    width: 300,
    margin: "0 auto",
    textAlign: 'center',
    background: '#17CBF7',
    justifyContent: "center"
  },
  input: {
    height: 25
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
    currentProject: state.currentProject
  }
}

////// CREATE TASK FORM ///////////
class ConnectedCreateTasksForm extends Component {
  constructor(props) {
    super()
    this.state = {
      description: '',
      assignTo:'',
      targetDate:null,
      task_status: "todo"
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(newProps) {
    if (newProps) {
      this.setState({
        currentProject: newProps.currentProject
      })
    }
  }

  handleChange = (event) => {
    var key = event.target.name
    this.setState({ [key]: event.target.value})
  }

  handleDateChange = (event, date) => {
    this.setState({
      targetDate: date
    })
  }

  canBeSubmitted(){
    const { description, assignTo, targetDate } = this.state
    return (
      description.length > 0 &&
      assignTo.length > 0 &&
      targetDate != null &&
      this.props.currentProject
    );
  }

  handleSubmit(e) {
    if (!this.canBeSubmitted()){
      e.preventDefault()
      return;
    }
    e.preventDefault()
    axios.post('/create/task',{
      description: this.state.description,
      assigned_to: this.state.assignTo,
      task_status: this.state.task_status,
      target_date:this.state.targetDate,
      project_id: this.props.currentProject._id
    }).then( result => {
      console.log('RESULT AFTER POSTING FROM CreateTaskForm', result.data)
      this.props.liftProjectToState(result.data)
      this.setState({
        description:'',
        assignTo:'',
        targetDate:null,
        task_status:"todo"
      })
      // this.props.liftProjectToState
      // Redirect to a react route
    })
  }

  render() {
    const { description, assignTo, targetDate, task_status} = this.state
    const isEnabled = this.canBeSubmitted();

    if (this.state.currentProject) {
      var kanbanLink = (<Link to='/ViewProject'><FlatButton label="Back to Project" /></Link>)
    }

    return (
      <Row center="xs">
        <Col center="xs" xs={12}>
          <Card style={style.card_style} zDepth={5}>
          <form onSubmit={this.handleSubmit}>
          <h3>Create Task Form</h3>
              <p>To Do</p>
                <input type='text' className="input" style={style.input} placeholder="To Do" name='description' value={description} onChange={this.handleChange} />
              <p>Team Member</p>
                <input type='text' className="input" style={style.input} placeholder="Team Member" name='assignTo' value={assignTo} onChange={this.handleChange} />
              <p>Task Status</p>
                <select name="task_status" value={task_status} onChange={this.handleChange}>
                  <option value="todo">To Do</option>
                  <option value="progress">In Progress</option>
                  <option value="review">In Review</option>
                  <option value="completed">Completed</option>
                </select>
              <p>Due Date</p>
              <DatePicker hintText="Due Date" value={targetDate} onChange={this.handleDateChange} container="inline" />
              <CardActions>
                <FlatButton type="submit"
                  label="Add Task"
                  disabled={!isEnabled}
                />
              </CardActions>
              {kanbanLink}
            </form>
            </Card>
          </Col>
        </Row>
      )
  }
}

const CreateTasksForm = connect(mapStateToProps, mapDispatchToProps)(ConnectedCreateTasksForm)
export default CreateTasksForm;
