import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';



const CreateTaskSteps = (props) => (
  <div>
    <p>Tasks Steps</p>
      <input type='number' min="1" className="input" placeholder="Step Number" name='stepNumber' value={props.stepNumber} onChange={this.handleChange} />
      <input type='text' className="input" placeholder="Step Action" name='stepAction' value={props.stepAction} onChange={this.handleChange} />
      <FlatButton type="btn " label="Remove Step" />
  </div>
);

export default CreateTaskSteps;
