import styled from 'styled-components';

const SectionTitle = styled.h1`
	font-family: Lucida Console;
	color: ${props => props.done ? 'grey' : 'black'};
	margin: 0px;
	padding: 0;
`;

export { SectionTitle };