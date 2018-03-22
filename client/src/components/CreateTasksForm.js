import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'material-ui/DatePicker';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

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



class CreateTasksForm extends Component {
  constructor() {
    super()
    this.state = {
      todo: '',
      teamMember:'',
      dueDate: ''
    }
  }

  handleChange = (event) => {
    var key = event.target.name
    this.setState({ [key]: event.target.value})
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   const { title } = this.state;
  //   this.props.addArticle({ title });
  //   this.setState({ title:''})
  // }

  render() {
    const { todo, teamMember, dueDate} = this.state
    return (

      <Card style={style.card_style} zDepth={5}>

      <form onSubmit={this.handleSubmit}>
      <h3>Create Task Form</h3>
          <p>To Do</p>
            <input type='text' placeholder="To Do" name='todo' value={todo} onChange={this.handleChange} />
          <p>Team Member</p>
            <input type='text' placeholder="Team Member" name='teamMember' value={teamMember} onChange={this.handleChange} />
          <p>Due Date</p>
          <DatePicker hintText="Due Date" container="inline" />

          <CardActions>
            <FlatButton label="Add Task" />
          </CardActions>
        </form>
      </Card>

    )
  }

}

// const CreateProjectForm = connect(null, mapDispatchToProps)(ConnectedCreateProjectForm)


export default CreateTasksForm;
