import styled from 'styled-components';

const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	> *:not(:first-child) {
		margin-top: 10px;
	}
`;

export { List };