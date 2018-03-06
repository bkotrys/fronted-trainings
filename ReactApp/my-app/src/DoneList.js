import React, { Component } from 'react';

class DoneList extends Component {
	render() {
		return(
			<li>
        <p>{this.props.element}</p>
        <button onClick={() => {
        	this.props.deleteElement(this.props.index, 'done');
        }}>Delete</button>
      </li>
		);
	}
}

export default DoneList;