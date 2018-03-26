import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import DatePicker from 'material-ui/DatePicker';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Row, Col } from 'react-flexbox-grid';
import { liftProjectToState, editProject } from "../actions/index"
import Snackbar from 'material-ui/Snackbar';
import {Link} from 'react-router-dom';

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


const mapDispatchToProps = dispatch => {
  return {
    liftProjectToState: project => dispatch(liftProjectToState(project)),
    editProject: project => dispatch(editProject(project))
  }
}


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
      currentProject: props.currentProject,
      snackBarOpen: false
    }
  }

  componentDidUpdate() {
    console.log('BELOW IS THE CURRENT PROJECT PROPS', this.props.currentProject)
    console.log('EDIT PROJECT UPDATED')
    console.log('BELOW IS THE CURRENT PROJECT STATE', this.state)

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
       currentProject: newProps.currentProject,
       _id: newProps.currentProject._id
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

  handleRequestClose = () => {
    this.setState({
      snackBarOpen: false,
    });
  };


  componentDidMount(){
    console.log("in componentDidMount editProject")
    console.log("props currentProject", this.props.currentProject)

    }


    // this is our dispatcher
    // this is how to handle
    // redux thunk allows us to do this
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


  handleSubmit = (event) => {
    event.preventDefault();
    axios.put('/edit/project', {
      title: this.state.title,
      description: this.state.description,
      target_date: this.state.targetDate,
      _id: this.state._id
    }).then( result => {
      this.props.liftProjectToState(result.data)
      console.log('THIS IS THE RESULT AFTER EDIT PROJECT FROM EditProject.js', result.data)
      this.setState({snackBarOpen:true})
    })
  }

  render() {
    const { title, description, owner, targetDate } = this.state

    if (this.state.currentProject) {
      var kanbanLink = (<Link to='/ViewProject'><FlatButton label="View Project" /></Link>)
    }
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
                <FlatButton type="submit" label="Update Project" />
              </CardActions>
              {kanbanLink}
            </form>
          </Card>
        </Col>
        <Col>
      </Col>
      <Snackbar
        open={this.state.snackBarOpen}
        message="Project Updated"
        autoHideDuration={4000}
        onRequestClose={this.handleRequestClose}
      />
      </Row>
    )
  }
}


const EditProjects = connect(mapStateToProps, mapDispatchToProps)(ConnectedEditProjects)
export default EditProjects;
