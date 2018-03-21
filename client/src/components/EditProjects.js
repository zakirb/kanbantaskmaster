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
    width: 400,
    height: 300,
    margin: 5
  }
}


class EditProjects extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description:'',
      owner: ''
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
    const { title, description, owner } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Edit Projects</h3>
          <p>Project Name</p>
            <input type='text' placeholder="Project Name" name='title' value={title} onChange={this.handleChange} />
          <p>Description</p>
            <input type='text' placeholder="Description" name='description' value={description} onChange={this.handleChange} />
          <p>Project Owner</p>
            <input type='text' placeholder="Project Owner" name='owner' value={owner} onChange={this.handleChange} />
          <p>End Date</p>
        <DatePicker hintText="End Date" container="inline" />
          <button type='submit'>Add Project</button>
      </form>
    )
  }

}

// const CreateProjectForm = connect(null, mapDispatchToProps)(ConnectedCreateProjectForm)


export default EditProjects;
