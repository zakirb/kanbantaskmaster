import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
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
    justifyContent: 'space-around',
  }
}

class ProjectItem extends Component {
  constructor(props){
    super()
    this.state = {
      currentProject: ''
    }
  }
  render() {
    return (
      <div>

        <h2 className="ProjItem">Project Item</h2>
        <Row>
    <Col xs={12}>
      <Row center="xs">
        {/* <p>A single project item</p> */}
          <Card style={style.card_style}>
            <CardHeader
              title="Workflow Project Title"
              subtitle="Zakir, Dan, Tim"
            />
            <CardActions>
              <FlatButton label="Edit Project" />
              <FlatButton label="Add Team Member" />
              <FlatButton label="Add Task" />
              <FlatButton label="Delete" />
            </CardActions>
            <CardText>
              {/* <Kanban /> */}
            </CardText>
          </Card>
        </Row>
    </Col>
    </Row>
      </div>
    );
  }
}


// const ProjectItem = (props) => (

//       <div>
//         <h2>Project Item</h2>
//         <p>A single project item</p>
//           <Card style={style.card_style}>
//             <CardHeader
//               title="Workflow Project Title"
//               subtitle="Zakir, Dan, Tim"
//             />
//             <CardActions>
//               <FlatButton label="Edit Project" />
//             </CardActions>
//             <CardText>
//               {/* <Kanban /> */}
//             </CardText>
//           </Card>
//       </div>
//     );
//   }
// }


// const ProjectItem = (props) => (
//       <div>
//         <h1>PROJECT TITLE</h1>
//         <h1>{props.project.title}</h1>
//         <p>A single project item</p>
//           <Card style={style.card_style}>
//             <CardHeader
//               title={props.project.title}
//             />
//             <CardActions>
//               <FlatButton label="Edit" />
//             </CardActions>
//             <CardText>
//               THIS EXAMPLE DOES NOT EXPAND...
//             </CardText>
//           </Card>
//       </div>
//     );


export default ProjectItem;
