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
    height: 400,
    margin: 5,
    textAlign: 'center'
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
      <Card style={style.card_style}>

        <form onSubmit={this.handleSubmit}>
          <h3>Edit Projects</h3>
            <p>Edit Project Name</p>
              <input type='text' placeholder="Project Name" name='title' value={title} onChange={this.handleChange} />
            <p>Edit Description</p>
              <input type='text' placeholder="Description" name='description' value={description} onChange={this.handleChange} />
            <p>Edit Project Owner</p>
              <input type='text' placeholder="Project Owner" name='owner' value={owner} onChange={this.handleChange} />
            <p>Edit End Date</p>
          <DatePicker hintText="End Date" container="inline" />

          <CardActions>
            <FlatButton label="Update Project" />
          </CardActions>
        </form>
      </Card>
    )
  }

}

// const CreateProjectForm = connect(null, mapDispatchToProps)(ConnectedCreateProjectForm)


export default EditProjects;
