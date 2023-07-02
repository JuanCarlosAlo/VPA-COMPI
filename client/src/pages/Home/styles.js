import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';

const StyledButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	gap: 2rem;
	width: 90%;
`;

const StyledMainButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: ${MEASUREMENTS.BUTTONS.HEIGHT};
	background-color: ${COLORS.WHITE};
	border: 2px solid ${COLORS.SECONDARY};
	border-radius: ${MEASUREMENTS.BUTTONS.BORDER_RADIUS};
	width: 100%;
	cursor: pointer;
	&:hover {
		background-color: ${COLORS.MAIN};
		color: ${COLORS.WHITE};
	}
`;

export { StyledMainButton, StyledButtonsContainer };