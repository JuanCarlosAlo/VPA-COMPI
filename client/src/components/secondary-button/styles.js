import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';

const StyledButton = styled.button`
	background-color: transparent;
	border: none;
	color: ${({ color }) => color};
	font-weight: ${MEASUREMENTS.FONTS_WEIGHT.BOLD};
	margin: 0;
	cursor: pointer;
`;

const StyledButtonContainer = styled.div`
display: flex;
justify-content: ${({ align }) => {
		console.log(align)
		if (align === 'CENTER') {
			return 'center'
		}
		if (align === 'LEFT') {
			return 'flex start'
		}
		if (align === 'RIGHT') {
			return 'flex end'
		}
	}};
`

export { StyledButton, StyledButtonContainer };
