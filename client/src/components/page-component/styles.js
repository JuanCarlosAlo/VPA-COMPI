import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';

const StyledPage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: calc(
		${MEASUREMENTS.PAGES.HEIGHT} -
			calc(${MEASUREMENTS.HEADER.HEIGHT} + ${MEASUREMENTS.FOOTER.HEIGHT})
	);
	padding-top: ${MEASUREMENTS.PADDING.SECONDARY_HEADER};
	padding-left: ${MEASUREMENTS.PADDING.MOBILE_OUTSIDE};
	padding-right: ${MEASUREMENTS.PADDING.MOBILE_OUTSIDE};
	max-width: 1080px;
    margin-left: auto;
    margin-right: auto;
`;


export { StyledPage };
