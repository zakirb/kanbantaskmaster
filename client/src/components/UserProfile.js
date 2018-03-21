import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


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
      <Card style={style.card_style}>
        <CardHeader
          title={props.user.name}
          subtitle="Subtitle"
          avatar="./images/user-image.png"
        />
        <CardMedia
          overlay={<CardTitle title={props.user.name} subtitle={props.user.email} />}
        >
          <img src="./images/user-profile-example.gif" alt="Default Profile" />
        </CardMedia>
        <CardTitle title={props.user.name} subtitle={props.user.email} />
        <CardText>
          Hello, {props.user.name}!
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label="Edit Profile" />
          {/* <FlatButton label="Action2" /> */}
          <FlatButton label="Log Out" onClick={props.logout}/>

        </CardActions>
      </Card>
    )
}
