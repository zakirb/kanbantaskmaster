import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
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
    height: 300,
    margin: 5
  }
}

export const UserProfile = props => {
    return (
      <Row>
        <Col xs={12}>
          <Card style={style.card_style}>
            <CardHeader
              title={props.user.name}
              textStyle={{padding:0, marginLeft: 10 + "px", marginTop: 10 + "px"}}
              avatar="./images/user-image.png"
            />
          
            <CardTitle title={props.user.name} subtitle={props.user.email} />
            <CardText>
              Hello, {props.user.name}!
              Click on "Create Project" above to get your project started. Then, add tasks and you will see them on the Kanban board.
            </CardText>
            <CardActions>
              <FlatButton label="Edit Profile" />
              {/* <FlatButton label="Action2" /> */}
              <FlatButton label="Log Out" onClick={props.logout}/>

            </CardActions>
          </Card>
        </Col>
      </Row>
    )
}
