import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';

const StyledButton = styled.button`
	background-color: transparent;

	color: ${({ color }) => color};
	border: 2px solid ${COLORS.MAIN};
	background-color: ${({ bgcolor }) => bgcolor};
	width: 150px;
	padding-top : 0.5rem;
	padding-bottom : 0.5rem;
	font-weight: ${MEASUREMENTS.FONTS_WEIGHT.BOLD};
	margin: 0;
	cursor: pointer;
	&:hover{
		background-color: ${COLORS.WHITE};
		color: ${COLORS.BLACK};
		border: none
	}
`;

const StyledButtonContainer = styled.div`
display: flex;
justify-content: ${({ align }) => {

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
