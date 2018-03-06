import React, { Component } from 'react';

class ElementList extends Component {
	render() {
		return(
			<li>
        <p>{this.props.element}</p>
        <button onClick={() => {
        	this.props.doneElement(this.props.index);
					this.props.deleteElement(this.props.index, 'todo');
        }}>Done</button>
        <button onClick={() => {
        	this.props.editElement(this.props.index);
        }}>Edit</button>
        <button onClick={() => {
        	this.props.deleteElement(this.props.index, 'todo');
        }}>Delete</button>
      </li>
		);
	}
}

export default ElementList;