// https://reactjs.org/docs/conditional-rendering.html
import React, { Component } from 'react';

class SingleTodo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditMode: false,
			text: props.element
		}
	}

	handleChange = (event) => {
		this.setState({
			text: event.target.value
		});
	}

	handleSubmit = (event) => {
		this.props.onEdit(this.props.index, this.state.text);
		this.toogleEdit();
	}
	
	toogleEdit = () => {
		this.setState({ isEditMode: !this.state.isEditMode})
	}

	handleDone = () => {
		const { index, onDone, onDelete } = this.props;
		onDone(index);
		onDelete(index, 'todo');
	};

	handleDelete = () => {
		const { index, onDelete } = this.props;
		onDelete(index, 'todo');
	}

	render() {
		return(
			<li>
				{
					!this.state.isEditMode ? 
						(
							<div>
								<span> { this.props.element }</span>
								<button onClick={this.toogleEdit}>Edit</button>
							</div>
						) :
						(
							<div>
								<form onSubmit={this.handleSubmit}>
									<input
										type="text"
										placeholder="Empty"
										value={this.state.text}
										onChange={this.handleChange}
									/>
									<input type="submit" value="Save"/>
								</form>
							</div>
						)
				}
			
				<button onClick={this.handleDone}>Done</button>
				<button onClick={this.handleDelete}>Delete</button>
			</li>
		);
	}
}

// const SingleTodo = ({
// 	index,
// 	element,
// 	onEdit,
// 	onDone,
// 	onDelete
// }) => {
// 	const handleChange = (event) => {
// 		onEdit(index, event.target.value);
// 	}

// 	const handleDone = () => {
// 		onDone(index);
// 		onDelete(index, 'todo');
// 	};

// 	const handlDelete = () => {
// 		onDelete(index, 'todo');
// 	}

// 	return (
// 		<li>
// 			<input
// 				type="text"
// 				placeholder="Empty"
// 				value={ element }
// 				onChange={ handleChange }
// 			/>
// 			<button onClick={ handleDone }>Done</button>
// 			<button onClick={ handlDelete }>Delete</button>
// 		</li>
// 	);
// }

export default SingleTodo;


