import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';

const StyledPageContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	height: 80%;
	width: calc(
		100% - ${MEASUREMENTS.PADDING.MOBILE_OUTSIDE} - ${MEASUREMENTS.PADDING.MOBILE_OUTSIDE}
	);
	
	background-color: ${COLORS.BLACK_TRANSPARENT};
	border: 2px solid ${COLORS.MAIN};

	padding: 1rem;
	padding-right: ${({ scroll }) => {
		if (scroll) { return '0.5rem' } else { return 'none' }
	}};
	overflow-y: ${({ scroll }) => {
		if (scroll) { return 'scroll' } else { return 'none' }
	}};
	
`;

export { StyledPageContainer };
