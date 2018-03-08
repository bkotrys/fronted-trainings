import React, { Component } from 'react';

class ElementList extends Component {
  handleChange = (event) => {
  	this.props.editElement(this.props.index, event.target.value);
  }

	render() {
		return(
			<li>
        <input type="text" placeholder="Empty" value={this.props.element} onChange={this.handleChange} />
        <button onClick={() => {
        	this.props.doneElement(this.props.index);
					this.props.deleteElement(this.props.index, 'todo');
        }}>Done</button>
        <button onClick={() => {
        	this.props.deleteElement(this.props.index, 'todo');
        }}>Delete</button>
      </li>
		);
	}
}

export default ElementList;