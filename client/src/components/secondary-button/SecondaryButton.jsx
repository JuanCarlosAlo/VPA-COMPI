import { useNavigate } from 'react-router-dom';
import { StyledButton } from './styles';

const SecondaryButton = ({
	text,
	setState,
	setValue,
	url,
	color,
	align,
	state
}) => {
	const navigate = useNavigate();

	return (
		<StyledButton
			color={color}
			align={align}
			onClick={() => {
				if (setState) setState(setValue);
				if (url) navigate(url, { state });
			}}
		>
			{text}
		</StyledButton>
	);
};

export default SecondaryButton;
