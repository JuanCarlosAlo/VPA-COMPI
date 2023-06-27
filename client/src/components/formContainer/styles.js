import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';

const StyledInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	margin-bottom: 1.5rem;
`;

const StyledErrorText = styled.p`
	margin: 0;
	font-weight: ${MEASUREMENTS.FONTS_WEIGHT.BOLD};
`;

export { StyledInputContainer, StyledErrorText };
