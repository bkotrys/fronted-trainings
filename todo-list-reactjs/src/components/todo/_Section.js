import styled from 'styled-components';

const Section = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgba(169, 173, 171, 0.7);
	width: calc(100% - 40px);
	margin: 10px;
	margin-bottom: 0;
	padding: 10px;
	padding-bottom: 0;
	border-radius: 10px;

	> * {
		margin-bottom: 10px;
	}
`;

export { Section };