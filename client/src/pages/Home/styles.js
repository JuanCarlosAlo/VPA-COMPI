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
	@media screen and (min-width: 468px){
		flex-direction: row;
	}
`;

const StyledMainButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: ${MEASUREMENTS.BUTTONS.HEIGHT};
	background-color: ${COLORS.UNACTIVE};
	border: 2px solid ${COLORS.MAIN};
	color: ${COLORS.WHITE};
	width: 100%;
	cursor: pointer;
	&:hover {
		background-color: ${COLORS.MAIN};
		color: ${COLORS.WHITE};
	}
	
`;

export { StyledMainButton, StyledButtonsContainer };
