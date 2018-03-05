import React, { Component } from 'react';

class DoneList extends Component {
	onDelete = () => {
		this.props.deleteElement(this.props.index, 'done');
	}

	render() {
		return(
			<li>
        <p>{this.props.element}</p>
        <button onClick={this.onDelete}>Delete</button>
      </li>
		);
	}
}

export default DoneList;