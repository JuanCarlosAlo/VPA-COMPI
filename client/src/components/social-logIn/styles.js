import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';

const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	gap: 1rem;
	align-items: center;
	padding: 0.5rem;
	width: 250px;
	margin-bottom: 2rem;
	border: 2px solid ${COLORS.SECONDARY};
	border-radius: ${MEASUREMENTS.BUTTONS.BORDER_RADIUS};
	color: ${COLORS.SECONDARY};
	background-color: ${COLORS.WHITE};
	cursor: pointer;
	&:hover {
		background-color: ${COLORS.MAIN};
		color: ${COLORS.WHITE};
		border: 1px solid ${COLORS.TERCIARY};
	}
`;

const StyledButtonIcon = styled.img`
	width: 30px;
`;

export { StyledButton, StyledButtonIcon };
