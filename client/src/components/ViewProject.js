import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
// import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';
// import Grid from 'material-ui/Grid';
import { Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../css/App.css';



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
    background: '#17F76A'

  },

}


class KanbanBoard extends Component {
  render() {
    return (
       <MuiThemeProvider>
      <div>
        <h2 class="kanban">Kanban Board</h2>

        {/* <h2>{Project Name}</h2> */}
        {/* <h2>Project Name</h2> */}
      <Row around="xs" middle="xs">
        <Col>
          <h3 class="kanban">To Do</h3>
          <div className="ToDo">
            <Card style={style.card_styleToDo} zDepth={5}>
            <CardText>
            <p>Task #1 Title</p>
            <p>Assigned to</p>
              <CardActions>
                <FlatButton label="Edit Task" />
              </CardActions>
              </CardText>
            </Card>


          <Card style={style.card_styleToDo} zDepth={5}>
          <CardText>
          <p>Task #2 Title</p>
          <p>Assigned to</p>
            <CardActions>
              <FlatButton label="Edit Task" />
            </CardActions>
            </CardText>
          </Card>
        </div>
        </Col>

        <Col>
          <h3 class="kanban">In Progress</h3>
          <div style={style.root} className="InProgress">
            <Card style={style.card_styleProgress} zDepth={5}>
              <CardText>
                <p>Task #3 Title</p>
                <p>Assigned to</p>
                <CardActions>
                  <FlatButton label="Edit Task" />
                </CardActions>
              </CardText>
            </Card>
          </div>
        </Col>
        <Col>
          <h3 class="kanban">Review</h3>
          <div style={style.root} className="Review">
            <Card style={style.card_styleReview} zDepth={5}>
              <CardText>
              <p>Task #5 Title</p>
              <p>Assigned to</p>
                <CardActions>
                  <FlatButton label="Edit Task" />
                </CardActions>
              </CardText>
            </Card>
          </div>
        </Col>
        <Col>
          <h3 class="kanban">Finished</h3>
          <div style={style.root} className="Finished">
            <Card style={style.card_styleFinished} zDepth={5}>
              <CardText>
              <p>Task #6 Title</p>
              <p>Assigned to</p>
                <CardActions>
                  <FlatButton label="Edit Task" />
                </CardActions>
              </CardText>
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
