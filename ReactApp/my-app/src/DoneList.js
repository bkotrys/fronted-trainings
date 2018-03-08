import React, { Component } from 'react';

class DoneList extends Component {
	render() {
		return(
			<li>
				<input type="text" placeholder="Empty" value={this.props.element} disabled />
        <button onClick={() => {
        	this.props.deleteElement(this.props.index, 'done');
        }}>Delete</button>
      </li>
		);
	}
}

export default DoneList;