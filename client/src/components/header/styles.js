import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: ${MEASUREMENTS.HEADER.HEIGHT};
	background-color: ${COLORS.WHITE};
	color: ${COLORS.MAIN};
	padding-left: ${MEASUREMENTS.PADDING.MOBILE_OUTSIDE};
	padding-right: ${MEASUREMENTS.PADDING.MOBILE_OUTSIDE};
	-webkit-box-shadow: 0px 5px 30px 10px ${COLORS.SECONDARY};
	-moz-box-shadow: 0px 5px 30px 10px ${COLORS.SECONDARY};
	box-shadow: 0px 5px 30px 10px ${COLORS.SECONDARY};
`;

export { StyledHeader };
