import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: ${MEASUREMENTS.HEADER.HEIGHT};
	background-color: ${COLORS.BLACK};
	color: ${COLORS.MAIN};
	-webkit-box-shadow: 0px 5px 30px 10px ${COLORS.MAIN};
	-moz-box-shadow: 0px 5px 30px 10px ${COLORS.MAIN};
	box-shadow: 0px 5px 30px 10px ${COLORS.MAIN};
`;


const StyledHeaderContainer = styled.div`
display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: ${MEASUREMENTS.PADDING.MOBILE_OUTSIDE};
	padding-right: ${MEASUREMENTS.PADDING.MOBILE_OUTSIDE};
	width: 100%;
 	max-width: 1080px;
    margin-left: auto;
	margin-right: auto;
   `

export { StyledHeader, StyledHeaderContainer };
