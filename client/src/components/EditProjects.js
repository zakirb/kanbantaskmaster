import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import DatePicker from 'material-ui/DatePicker';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Row, Col } from 'react-flexbox-grid';
import { liftProjectToState } from "../actions/index"
// import { liftProjectToState, editProject } from "../actions/index"
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
//     liftProjectToState: project => dispatch(liftProjectToState(project)),
//     editProject: project => dispatch(editProject(project))
//   }
// }

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
    super(props)
    this.state = {
      title: '',
      description:'',
      owner: '',
      targetDate: null,
      project: props.currentProject
    }
  }

  componentDidUpdate() {
    console.log('BELOW IS THE CURRENT PROJECT', this.props.currentProject)
    console.log('EDIT PROJECT UPDATED')
    console.log('BELOW IS THE CURRENT PROJECT', this.state)

  }

  componentWillReceiveProps(newProps){
   if (newProps.currentProject){
     console.log(this.state, newProps);
     let currentTargetDate = Date.parse(newProps.currentProject.target_date)
     currentTargetDate = new Date(currentTargetDate)
     console.log("THIS IS THE CURRENT TARGET DATE", currentTargetDate)
     this.setState({
       title: newProps.currentProject.title,
       description: newProps.currentProject.description,
       targetDate: currentTargetDate,
       project: newProps.currentProject

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

  componentDidMount(){
    console.log("in componentDidMount editProject")
    console.log("props currentProject", this.props.currentProject)
    // if (!this.props.currentProject){

    // } else {
    //
    // }
    //

    // this is our dispatcher
    // this is how to handle
    // redux thnnk allows us to do this
    // how to handle async actions

    // Learncode Academy redux tutorials
    // link in Google Document

    // https://www.youtube.com/playlist?list=PLoYCgNOIyGADILc3iUJzygCqC8Tt3bRXt


    // store.dispatch( (dispatch) => {
    //   dispatch({type: "GET_PROJECT"})
    //   axios.get("GET/POST/PUT?")
    //   .then((response) => {
    //     dispatch({type: "RECEIVE_PROJECT", payload: response.data})
    //   })
    //   .catch((err) => {
    //     dispatch({type: "GET_PROJECT_ERROR", payload: err})
    //   })
    // })


    //axios.post('view/findOne/project', {
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
    const { title, description, owner, targetDate } = this.state
    return (
      <Row center="xs">
        <Col>
          <Card style={style.card_style} zDepth={5}>
            <form onSubmit={this.handleSubmit}>
              <h3>Edit Project</h3>
              <p>Edit Project Name</p>
                <input type='text' className="input" placeholder="Project Name" name='title' value={title} onChange={this.handleChange} />
              <p>Edit Description</p>
                <input type='text' className="input" placeholder="Description" name='description' value={description} onChange={this.handleChange} />
              <p>Edit End Date</p>
              <DatePicker  value={targetDate} onChange={this.handleDateChange} hintText="End Date" container="inline" />
              <CardActions>
                <FlatButton label="Update Project" />
              </CardActions>
            </form>
          </Card>
        </Col>
        <Col>
      </Col>
      </Row>
    )
  }
}


const EditProjects = connect(mapStateToProps, mapDispatchToProps)(ConnectedEditProjects)
export default EditProjects;
