import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledModal = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-color: rgb(0,0,0,0.8);
	z-index: 100;
`;

const StyledModalContainer = styled.div`
background-color: ${COLORS.BLACK_TRANSPARENT};
border: 2px solid ${COLORS.MAIN};
padding: 1rem;
`
export { StyledModal, StyledModalContainer };
