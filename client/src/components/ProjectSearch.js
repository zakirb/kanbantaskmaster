import React from 'react';
import TextField from 'material-ui/TextField';

const ProjectSearch = props => (
      <div>
        <p>Search for a project title:</p>
          <TextField
            name='projectSearch'
            type='text'
            value={props.value}
            onChange={props.onChange}
          />
      </div>
    );

export default ProjectSearch;
