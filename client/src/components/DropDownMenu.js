import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 200,
  },
};

export default class DropDownMenuTask extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: props.dropDownValue};
  }

  handleChange = (event, index, value) => {
    this.setState({value});
    if (value) {
      this.props.handleStatusChange(this.props.task,this.state.value)
    }
  }


  render() {
    return (
      <div>

        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}>

          <MenuItem value={null} primaryText="Move Task To:" />
          <MenuItem value={1} primaryText="To Do" />
          <MenuItem value={2} primaryText="In Progress" />
          <MenuItem value={3} primaryText="In Review" />
          <MenuItem value={4} primaryText="Finished" />
        </DropDownMenu>
      </div>
    );
  }
}
