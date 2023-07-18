import styled from 'styled-components';
import { COLORS } from '../../constants/colors';


const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	gap: 1rem;
	align-items: center;
	padding: 0.5rem;
	width: 250px;
	margin-bottom: 2rem;
	border: 2px solid ${COLORS.SECONDARY};
	color: ${COLORS.SECONDARY};
	background-color: ${COLORS.BLACK};
	cursor: pointer;
	&:hover {
		background-color: ${COLORS.MAIN};
		color: ${COLORS.WHITE};
		border: 2px solid ${COLORS.MAIN};
	}
`;

const StyledButtonIcon = styled.img`
	width: 30px;
`;

export { StyledButton, StyledButtonIcon };
