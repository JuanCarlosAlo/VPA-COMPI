import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';

const StyledButton = styled.p`
	color: ${({ color }) => color};
	font-weight: ${MEASUREMENTS.FONTS_WEIGHT.BOLD};
	text-align: ${({ align }) => align};
	margin: 0;
	cursor: pointer;
`;

export { StyledButton };
