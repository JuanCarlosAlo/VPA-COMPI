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
	padding-top: 2rem;
`;

export { StyledPage };
