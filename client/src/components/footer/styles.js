import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS, SECONDARY_COLORS } from '../../constants/colors';
const StyledFooter = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: ${MEASUREMENTS.PADDING.MOBILE_OUTSIDE};
	padding-right: ${MEASUREMENTS.PADDING.MOBILE_OUTSIDE};
	height: ${MEASUREMENTS.FOOTER.HEIGHT};
	background: ${SECONDARY_COLORS.SECONDARY_GRADIANT};
	color: ${COLORS.MAIN};
	/* border-top: 1px solid ${COLORS.SECONDARY}; */
`;

export { StyledFooter };
