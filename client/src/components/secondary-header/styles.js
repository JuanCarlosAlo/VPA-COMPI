import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';

const SecondaryHeader = styled.div`
	position: absolute;
	top: ${MEASUREMENTS.HEADER.HEIGHT};
	height: calc(${MEASUREMENTS.HEADER.HEIGHT} - 1rem);
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 4rem;
	padding-right: 4rem;
	background-color: ${COLORS.WHITE};
	width: 100%;
`;
export { SecondaryHeader };
