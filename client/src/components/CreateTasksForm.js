import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import DatePicker from 'material-ui/DatePicker';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Row, Col } from 'react-flexbox-grid';

// import { addProject } from "../actions/index"

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
    height: 350,
    margin: 5,
    textAlign: 'center',
    background: '#17CBF7'
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    token: state.token
  }
}




class ConnectedCreateTasksForm extends Component {
  constructor(props) {
    super()
    this.state = {
      description: '',
      assignTo:'',
      connectedDate: null,
      targetDate:null
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
      targetDate
    })
  }

  handleSubmit(e) {
    // if (!this.canBeSubmitted()){
    //   e.preventDefault()
    //   return;
    // }
    e.preventDefault()
    axios.post('/create/task',{
      description: this.state.description,
      assignTo: this.state.assignTo,
      targetDate:this.state.targetDate
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
    const { description, assignTo, connectedDate} = this.state
    return (
      <Row center="xs">
        <Col>

      <Card style={style.card_style} zDepth={5}>

      <form onSubmit={this.handleSubmit}>
      <h3>Create Task Form</h3>
          <p>To Do</p>
            <input type='text' className="input" placeholder="To Do" name='description' value={description} onChange={this.handleChange} />
          <p>Team Member</p>
            <input type='text' className="input" placeholder="Team Member" name='assignTo' value={assignTo} onChange={this.handleChange} />
          <p>Due Date</p>
          <DatePicker hintText="Due Date" value={connectedDate} onChange={this.handleDateChange} container="inline" />

          <CardActions>
            <FlatButton type="submit" label="Add Task" />
          </CardActions>
        </form>
      </Card>
      </Col>
      </Row>
    )
  }

}




const CreateTasksForm = connect(mapStateToProps, null)(ConnectedCreateTasksForm)
export default CreateTasksForm;
