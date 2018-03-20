import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addProject } from "../actions/index"

// const mapDispatchToProps = dispatch => {
//   return {
//     addProject: project => dispatch(addProject(project))
//   }
// }


class CreateProjectForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description:''
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
    const { title, description} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
      <input type='text' name=='title' value={title} onChange={this.handleChange} />
      <input type='text' name='description' value={description} onChange={this.handleChange} />
      <button type='submit'>ADD Project</button>
      </form>
    )
  }

}

// const CreateProjectForm = connect(null, mapDispatchToProps)(ConnectedCreateProjectForm)


export default CreateProjectForm;
