import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import DatePicker from 'material-ui/DatePicker';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

// import { addProject } from "../actions/index"

// const mapDispatchToProps = dispatch => {
//   return {
//     liftProjectToState: project => dispatch(liftProjectToState(project))
//   }
// }

const style = {
  // root: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   justifyContent: 'space-around',
  // },
  card_style: {
    width: 300,
    height: 400,
    margin: 5,
    textAlign: 'center',
    background: 'silver'
  },
  layout: {
    zDepth: 10,
    margin: 10
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    token: state.token
  }
}


class ConnectedCreateProjectForm extends Component {
  constructor(props) {
    super()
    this.state = {
      title: '',
      description:'',
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
        month: date.getMonth(),
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
    axios.post('/create/project',{
      title: this.state.title,
      description: this.state.description,
      owner: this.props.user._id,
      targetDate:this.state.targetDate
    }).then( result => {
      console.log(result.data)
      console.log('THIS IS THE RESULT AFTER POSTING FROM CreateProjectForm')
      // this.props.liftProjectToState
      console.log('THIS IS THE RESULT AFTER PROJECT IS LIFTED')
      // Redirect to a react route
    })
  }

  render() {
    const { title, description, owner } = this.state

    return (
      <Card style={style.card_style} zDepth={5}>

      <form onSubmit={this.handleSubmit}>
        <h3>Create Project Form</h3>
          <p>Project Name</p>
            <input type='text' placeholder="Project Name" name='title' value={title} onChange={this.handleChange} />
          <p>Description</p>
            <input type='text' placeholder="Description" name='description' value={description} onChange={this.handleChange} />
          <p>End Date</p>
          <DatePicker  value={this.state.connectedDate} onChange={this.handleDateChange} hintText="End Date" container="inline" />

          <CardActions>
            <FlatButton type="submit" label="Add Project" />
            <FlatButton label="Reset?" />
          </CardActions>
        </form>
      </Card>
    )
  }

}




const CreateProjectForm = connect(mapStateToProps, null)(ConnectedCreateProjectForm)
export default CreateProjectForm;
