import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';

const StyledPrimaryButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	height: ${MEASUREMENTS.BUTTONS.HEIGHT};
	background-color: ${COLORS.WHITE};
	border: 2px solid ${COLORS.SECONDARY};
	border-radius: ${MEASUREMENTS.BUTTONS.BORDER_RADIUS};
	color: ${COLORS.SECONDARY};
	width: 100%;
	cursor: pointer;
	&:hover {
		background-color: ${COLORS.MAIN};
		color: ${COLORS.WHITE};
		border: 2px solid ${COLORS.TERCIARY};
	}
`;

export { StyledPrimaryButton };
