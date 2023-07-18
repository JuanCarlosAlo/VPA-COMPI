import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';

const StyledSecondaryHeader = styled.div`
display: flex;
	align-items: center;
	position: absolute;
	top: ${MEASUREMENTS.HEADER.HEIGHT};
	height: calc(${MEASUREMENTS.HEADER.HEIGHT} - 1rem);
	background-color: ${COLORS.BLACK};
	width: 100%;
`;

const StyledSecondaryHeaderContainer = styled.div`
display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left:calc(${MEASUREMENTS.PADDING.MOBILE_OUTSIDE} * 2);
	padding-right:calc(${MEASUREMENTS.PADDING.MOBILE_OUTSIDE} * 2);
	width: 100%;
 	max-width: 1080px;
    margin-left: auto;
    margin-right: auto;
`
export { StyledSecondaryHeader, StyledSecondaryHeaderContainer };
