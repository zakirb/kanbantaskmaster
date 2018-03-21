import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
// import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card_style: {
    width: 700,
    display: 'inline',
    margin: 10,
  }
}

class KanbanBoard extends Component {
  render() {
    return (
      <div>
        <h2>Kanban Board</h2>

        {/* <h2>{Project Name}</h2> */}
        {/* <h2>Project Name</h2> */}
          <div className="ToDo">
            <h3>To Do</h3>

            <Card style={style.card_style}>
              <CardHeader
                title="Task #4 Title"
                subtitle="Assigned To"
              />
                <CardText>
                    <CardActions>
                      <FlatButton label="Edit Task" />
                    </CardActions>
                </CardText>
              </Card>

              <Card style={style.card_style}>
                <CardHeader
                  title="Task #5 Title"
                  subtitle="Assigned To"
                />
                  <CardText>
                      <CardActions>
                        <FlatButton label="Edit Task" />
                      </CardActions>
                  </CardText>
                </Card>

            </div>


          <div className="InProgress">
            <h3>In Progress</h3>

              <Card style={style.card_style}>
                {/* <CardHeader
                  title="Task #2 Title"
                  subtitle="Assigned To"
                /> */}
                <CardText>
                  <p>Task #2 Title</p>
                  <p>Assigned to</p>
                  <CardActions>
                    <FlatButton label="Edit Task" />
                  </CardActions>
                </CardText>
              </Card>

              <Card style={style.card_style}>
                {/* <CardHeader
                  title="Task #6 Title"
                  subtitle="Assigned To"
                /> */}
                <CardText>
                  <p>Task #6 Title</p>
                  <p>Assigned to</p>
                  <CardActions>
                    <FlatButton label="Edit Task" />
                  </CardActions>
                </CardText>
              </Card>

          </div>


          <div className="Review">
            <h3>Review</h3>

            <Card style={style.card_style}>
              <CardHeader
                title="Task #3 Title"
                subtitle="Assigned To"
              />
              <CardText>
                <CardActions>
                  <FlatButton label="Edit Task" />
                </CardActions>
              </CardText>
            </Card>

          </div>

          <div className="Finished">
            <h3>Finished</h3>

            <Card style={style.card_style}>
              <CardHeader
                title="Task #1 Title"
                subtitle="Assigned To"
              />
              <CardText>
                <CardActions>
                  <FlatButton label="Edit Task" />
                </CardActions>
              </CardText>
            </Card>

          </div>

      </div>
    );
  }
}


export default KanbanBoard;
