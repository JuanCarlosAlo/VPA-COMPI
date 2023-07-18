import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';


const StyledInputContainer = styled.div`
	position: relative;
	object-fit: contain;
	overflow: hidden;
	background-color: transparent;
	color: ${COLORS.WHITE};
	background-color: ${COLORS.MAIN};
	width: 100px;
	padding-top : 0.5rem;
	padding-bottom : 0.5rem;
	font-weight: ${MEASUREMENTS.FONTS_WEIGHT.BOLD};
	margin: 0;
	text-align: center;
	cursor: pointer;
	&:hover{
		background-color: ${COLORS.WHITE};
		color: ${COLORS.BLACK};
		border: none
	}
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
