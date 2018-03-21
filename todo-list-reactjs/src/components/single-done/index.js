import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/fontawesome-free-solid';
import { DoneListElement } from './_DoneListElement';

class SingleDone extends Component {
	render() {
		return(
			<DoneListElement>
				<FontAwesomeIcon icon={faCheck}/>
				<span>
					{this.props.element}
				</span>
      </DoneListElement>
		);
	}
}

export default SingleDone;