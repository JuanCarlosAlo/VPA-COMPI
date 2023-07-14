import styled from 'styled-components';


const StyledInputContainer = styled.div`
	position: relative;
	object-fit: contain;
	overflow: hidden;
	background-color: red;
	color: white;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	border-radius: 1rem;
`;

const StyledInput = styled.input`
	position: absolute;
	top: 0;
	left: 0;
	height:100%;
	width: 100%;
	cursor: pointer;
	opacity: 0;
`;

export { StyledInputContainer, StyledInput };
