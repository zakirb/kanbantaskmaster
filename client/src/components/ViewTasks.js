import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Row, Col } from 'react-flexbox-grid';

const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card_style: {
    width: 400,
    height: 600,
    margin: 5
  }
}

class ViewTasks extends Component {
  render() {
    return (

      <div>
        <Row center="xs">
          <Col>
        <h1 className= "view">View Tasks</h1>
        <Card  className= "view" style={style.card_style}>
          <CardHeader
            title="Workflow Project Title"
            subtitle="Zakir, Dan, Tim"
          />
          <CardActions>
            <FlatButton label="Edit Task" />
            <FlatButton label="Add Step" />
            <FlatButton label="Delete" />
          </CardActions>
          <CardText>
            <ul>
              <li>Task: Build App</li>
              <li>Assigned To:</li>
              <li>Steps:</li>
              <ol>
                <li>Create React App</li>
                <li>NPM install dependencies</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.</li>
                <li>Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.</li>
                <li>Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</li>
                <li>Create React App</li>
              </ol>
            </ul>
          </CardText>
        </Card>
      </Col>
    </Row>
      </div>

    );
  }
}





export default ViewTasks;
