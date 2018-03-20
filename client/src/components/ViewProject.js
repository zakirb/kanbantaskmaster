import React, { Component } from 'react';

class ViewProject extends Component {
  render() {
    return (
      <div>
        <h1>View Project</h1>
        

        <h2>{Project Name}</h2>

          <div classname="ToDo">
            <h3>Tasks</3>
              <ul>
                <li>Task 4</li>
              </ul>
          </div>

          <div classname="InProgress">
            <h3>In Progress</h3>
              <ul>
                <li>Task 2</li>
              </ul>
          </div>

          <div classname="Review">
            <h3>Review</h3>
              <ul>
                <li>Task 3</li>
              </ul>
          </div>

          <div classname="Finished">
            <h3>Finished</h3>
              <ul>
                <li>Task 1</li>
              </ul>
          </div>
      </div>
    );
  }
}





export default ViewProject;
