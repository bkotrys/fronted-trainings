// https://reactjs.org/docs/conditional-rendering.html
import React, { Component } from 'react';
import { ListElement } from './_ListElement';
import { Button } from './_Button';
import { Input } from './_Input';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/fontawesome-free-solid';
import { faSave } from '@fortawesome/fontawesome-free-solid';
import { faCheckSquare } from '@fortawesome/fontawesome-free-solid';
import { faTrashAlt } from '@fortawesome/fontawesome-free-solid';

class SingleTodo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditMode: false,
			text: ''
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
		this.setState({ isEditMode: !this.state.isEditMode});
	}

	handleDone = () => {
		const { index, onDone } = this.props;
		onDone(index);
	}

	handleDelete = () => {
		const { index, onDelete } = this.props;
		onDelete(index);
	}

	componentWillReceiveProps(props) {
		this.setState({
			text: props.element
		})
	}

	render() {
		return(
			<ListElement>
				{
					!this.state.isEditMode ? 
						(
							<div>
								<Input value={this.props.element} disabled></Input>
								<Button blue onClick={this.toogleEdit}><FontAwesomeIcon icon={faEdit}/></Button>
								<Button green onClick={this.handleDone}><FontAwesomeIcon icon={faCheckSquare}/></Button>
								<Button red onClick={this.handleDelete}><FontAwesomeIcon icon={faTrashAlt}/></Button>
							</div>
						) :
						(
							<form onSubmit={this.handleSubmit}>
								<Input
									type="text"
									placeholder="Empty"
									value={this.state.text}
									onChange={this.handleChange}
								/>
								<Button blue type="submit"><FontAwesomeIcon icon={faSave}/></Button>
								<Button grey disabled><FontAwesomeIcon icon={faCheckSquare}/></Button>
								<Button grey disabled><FontAwesomeIcon icon={faTrashAlt}/></Button>
							</form>
						)
					}
			</ListElement>
		);
	}
}

export default SingleTodo;


