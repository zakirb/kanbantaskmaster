import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import DatePicker from 'material-ui/DatePicker';
import {Card, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Row, Col } from 'react-flexbox-grid';
import { liftProjectToState } from "../actions/index"
import { Link } from 'react-router-dom';
import Snackbar from 'material-ui/Snackbar';

const style = {
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
  },
  input: {
    height:25
  }
}

//// REDUX ////
const mapDispatchToProps = dispatch => {
  return {
    liftProjectToState: project => dispatch(liftProjectToState(project))
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    token: state.token,
    currentProject:state.currentProject
  }
}

//// CREATE PROJECT FORM ////
class ConnectedCreateProjectForm extends Component {
  constructor(props) {
    super()
    this.state = {
      title: '',
      description:'',
      owner: '',
      targetDate:null,
      snackBarOpen: false
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
    const { title, description, targetDate } = this.state
    return (
      title.length > 0 &&
      description.length > 0 &&
      targetDate != null
    );
  }

  handleSubmit(e) {
    if (!this.canBeSubmitted()){
      e.preventDefault()
      return;
    }
    e.preventDefault()
    axios.post('/create/project',{
      title: this.state.title,
      description: this.state.description,
      owner: this.props.user._id,
      targetDate: this.state.targetDate
    }).then( result => {
      console.log(result.data)
      this.props.liftProjectToState(result.data.project)
      this.setState({
        title: '',
        description:'',
        targetDate:null,
        snackBarOpen:true
      })
    })
  }
  handleRequestClose = () => {
    this.setState({
      snackBarOpen: false,
    });
  };

  render() {
    const { title, description, owner, targetDate } = this.state
    const isEnabled = this.canBeSubmitted();

    if (this.state.currentProject) {
      var kanbanLink = (<Link to='/ViewProject'><FlatButton label="View Project" /></Link>)
    }

    return (
      <Row center="xs">
        <Col>
          <Card className="projectForm" style={style.card_style} zDepth={5}>
            <form onSubmit={this.handleSubmit}>
              <h3>Create Project Form</h3>
              <p>Project Name</p>
                <input type='text' className="input" placeholder="Project Name" style={style.input} name='title' value={title} onChange={this.handleChange} />
              <p>Description</p>
                <input type='text' className="input" placeholder="Description" style={style.input} name='description' value={description} onChange={this.handleChange} />
              <p>End Date</p>
              <DatePicker  value={targetDate} onChange={this.handleDateChange} hintText="End Date" container="inline" />
              <CardActions>
                <FlatButton
                  type="submit"
                  disabled={!isEnabled}
                  label="Add Project"
                />
              </CardActions>
              {kanbanLink}
            </form>
          </Card>
        </Col>
        <Snackbar
          open={this.state.snackBarOpen}
          message="Project Created"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </Row>
    )
  }
}

const CreateProjectForm = connect(mapStateToProps, mapDispatchToProps)(ConnectedCreateProjectForm)
export default CreateProjectForm;
