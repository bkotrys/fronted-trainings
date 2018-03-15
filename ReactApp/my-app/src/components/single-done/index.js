import React, { Component } from 'react';

class SingleDone extends Component {
	handleDelete = () => {
		const { index, onDelete } = this.props;
		onDelete(index, 'done');
	}

	render() {
		return(
			<li>
				<span> { this.props.element } </span>
        <button onClick={this.handleDelete}>Delete</button>
      </li>
		);
	}
}

export default SingleDone;