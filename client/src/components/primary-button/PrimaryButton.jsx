import { StyledPrimaryButton } from './styles';
import { useNavigate } from 'react-router-dom';

const PrimaryButton = ({ text, setState, setValue, url, color, align }) => {
	const navigate = useNavigate();
	if (setState) {
		return (
			<StyledPrimaryButton
				color={color}
				align={align}
				onClick={() => {
					if (setState) setState(setValue);
					if (url) navigate(url);
				}}
			>
				{text}
			</StyledPrimaryButton>
		);
	}
};

export default PrimaryButton;
