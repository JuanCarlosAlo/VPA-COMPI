import { createPortal } from 'react-dom';
import { StyledModal, StyledModalContainer } from './styles';

const Modal = ({ children }) => {
	if (!children) return;

	return createPortal(
		<StyledModal>
			<StyledModalContainer>{children}</StyledModalContainer>
		</StyledModal>,
		document.getElementById('modal')
	);
};

export default Modal;
