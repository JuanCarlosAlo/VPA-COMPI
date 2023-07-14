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
	background-color: rgb(20,20,20,0.4);
	z-index: 100;
`;

const StyledModalContainer = styled.div`
background-color: ${COLORS.WHITE};
border: 4px solid ${COLORS.MAIN};
border-radius: 1rem;
padding: 1rem;
`
export { StyledModal, StyledModalContainer };
