import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
// import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
// import Grid from 'material-ui/Grid';
import { Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../css/App.css';
import DropDownMenuTask from './DropDownMenu';
import {Link} from 'react-router-dom';

const style = {

  card_styleToDo: {
    width: 300,
    margin: 10,
    textAlign: 'center',
    background: '#FFFFA5'

  },
  card_styleProgress: {
    width: 300,
    margin: 10,
    textAlign: 'center',
    background: '#1ba8b1'

  },
  card_styleReview: {
    width: 300,
    margin: 10,
    textAlign: 'center',
    background: '#ff7455'

  },
  card_styleFinished: {
    width: 300,
    margin: 10,
    textAlign: 'center',
    background: '#17F76A',
    justifyContent: 'center'

  }
}

class KanbanBoard extends Component {
  render() {
    return (
       <MuiThemeProvider>
      <div>
        <h2 className="kanban">Kanban Board</h2>

        {/* <h2>{Project Name}</h2> */}
        {/* <h2>Project Name</h2> */}
      <Row around="xs" middle="xs">
        <Col>


        <Row center="xs">
          <Col>
          <h3 className="kanban">To Do</h3>
          </Col>
          </Row>

          <div className="ToDo">
            <Card style={style.card_styleToDo} zDepth={5}>
            <CardText>
            <p>Task #1 Title</p>
            <p>Assigned to: </p>
              <CardActions>
                <Link to="/Tasks/edit"><RaisedButton className="edit" label="Edit Task" /></Link>
              </CardActions>
              </CardText>
              <DropDownMenuTask />
            </Card>




        </div>
        </Col>

        <Col>
        <Row center="xs">
          <Col>
          <h3 className="kanban">In Progress</h3>
          </Col>
          </Row>
          <div style={style.root} className="InProgress">
            <Card style={style.card_styleProgress} zDepth={5}>
              <CardText>
                <p>Task #3 Title</p>
                <p>Assigned to: </p>
                <CardActions>
                  <RaisedButton label="Edit Task" />
                </CardActions>
              </CardText>
              <DropDownMenuTask />
            </Card>
          </div>
        </Col>

        <Col>
        <Row center="xs">
          <Col>
          <h3 className="kanban">In Review</h3>
          </Col>
          </Row>
          <div style={style.root} className="Review">
            <Card style={style.card_styleReview} zDepth={5}>
              <CardText>
              <p>Task #5 Title</p>
              <p>Assigned to: </p>
                <CardActions>
                  <RaisedButton label="Edit Task" />
                </CardActions>
              </CardText>
              <DropDownMenuTask />
            </Card>
          </div>
        </Col>

        <Col>
        <Row center="xs">
          <Col>
          <h3 className="kanban">Finished</h3>
          </Col>
          </Row>
          <div style={style.root} className="Finished">
            <Card style={style.card_styleFinished} zDepth={5}>
              <CardText>
              <p>Task #6 Title</p>
              <p>Assigned to: </p>
                <CardActions>
                  <RaisedButton label="Edit Task" />
                </CardActions>
              </CardText>
              <DropDownMenuTask />
            </Card>
          </div>
        </Col>
      </Row>
      </div>
       </MuiThemeProvider>
    );
  }
}



export default KanbanBoard;
