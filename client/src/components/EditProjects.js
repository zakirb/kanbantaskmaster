import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import DatePicker from 'material-ui/DatePicker';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Row, Col } from 'react-flexbox-grid';
import { liftProjectToState } from "../actions/index"

// import { addProject } from "../actions/index"

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
    background: 'silver'
  }
}

//// REDUX ////
const mapDispatchToProps = dispatch => {
  return {
    liftProjectToState: project => dispatch(liftProjectToState(project))
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addProject: project => dispatch(addProject(project))
//   }
// }

const mapStateToProps = state => {
  return {
    user: state.user,
    token: state.token,
    currentProject: state.currentProject
  }
}

//// EDIT PROJECT FORM ////
class ConnectedEditProjects extends Component {
  constructor(props) {
    super()
    this.state = {
      title: '',
      description:'',
      connectedDate: null,
      owner: '',
      targetDate:null
    }
  }

  componentDidUpdate() {
    console.log('BELOW IS THE CURRENT CPROJECT', this.props.currentProject)
    console.log('EDIT PROJECT UPDATED')
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
    console.log("in componentDidMount editProject")
    // console.log("state")
    // console.log(this.state)
    console.log("props currentProject")
    console.log(this.props.currentProject)
    if (!this.props.currentProject){

    } else {

    }
    // axios.post('view/findOne/project', {
    //   project_id: this.state.project._id
    // }).then( result => {
    //   console.log("result ", result)
    //   this.setState({
        // currentProject: result.data
    //   })
    // })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/edit/project', {
      title: this.state.title,
      description: this.state.description,
      owner: this.props.user._id,
      targetDate: this.state.targetDate
    }).then( result => {
      this.props.liftProjectToState(result.data)
      console.log('THIS IS THE RESULT AFTER EDIT PROJECT FROM EditProject.js')
    })
  }

  render() {
    const { title, description, owner, connectedDate } = this.state
    return (
      <Row center="xs">
        <Col>
          <Card style={style.card_style} zDepth={5}>
            <form onSubmit={this.handleSubmit}>
              <h3>Edit Projects</h3>
              <p>Edit Project Name</p>
                <input type='text' className="input" placeholder="Project Name" name='title' value={title} onChange={this.handleChange} />
              <p>Edit Description</p>
                <input type='text' className="input" placeholder="Description" name='description' value={description} onChange={this.handleChange} />
              <p>Edit End Date</p>
              <DatePicker  value={connectedDate} onChange={this.handleDateChange} hintText="End Date" container="inline" />
              <CardActions>
                <FlatButton label="Update Project" />
              </CardActions>
            </form>
          </Card>
        </Col>
      </Row>
    )
  }
}

// const CreateProjectForm = connect(null, mapDispatchToProps)(ConnectedCreateProjectForm)

const EditProjects = connect(mapStateToProps, mapDispatchToProps)(ConnectedEditProjects)
export default EditProjects;
