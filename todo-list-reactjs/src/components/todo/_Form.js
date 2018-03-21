import styled from 'styled-components';

const Form = styled.form`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 35px;

	> input {
		border: 0;
		width: 100%;
		padding-left: 5px;
		padding-right: 5px;
		border-radius: 5px 0 0 5px;
	}

	> button {
		border: 0;
		width: 35px;
		border-radius: 0 5px 5px 0;
		background: rgb(145, 85, 193);
	}
`;

export { Form }