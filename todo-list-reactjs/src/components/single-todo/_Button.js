import styled from 'styled-components';

const Button = styled.button`
	width: 35px;
	height: 35px;
	background: ${props => props.blue ? 'rgb(85, 92, 193)'
		: props.green ? 'rgb(88, 193, 85)'
		: props.red ? 'rgb(193, 85, 85)'
		: props.grey ? 'rgb(61, 59, 59)'
		: 'white'};
	border: 0;
	border-radius: 5px;
	margin: 0;
	margin-left: 5px;
`;

export { Button };