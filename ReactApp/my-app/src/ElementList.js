import React, { Component } from 'react';

class ElementList extends Component {
	onDelete = () => {
		this.props.deleteElement(this.props.index, 'todo');
	}

	onDone = () => {
		this.props.doneElement(this.props.index);
		this.props.deleteElement(this.props.index, 'todo');
	}

	render() {
		return(
			<li>
        <p>{this.props.element}</p>
        <button onClick={this.onDone}>Done</button>
        <button onClick={this.onEdit}>Edit</button>
        <button onClick={this.onDelete}>Delete</button>
      </li>
		);
	}
}

export default ElementList;