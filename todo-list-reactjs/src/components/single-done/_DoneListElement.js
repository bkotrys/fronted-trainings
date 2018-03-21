import styled from 'styled-components';

const DoneListElement = styled.li`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	color: grey;

	> *:first-child {
		width: 35px;
	}
`;

export { DoneListElement };