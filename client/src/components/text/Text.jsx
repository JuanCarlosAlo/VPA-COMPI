import { StyledText } from './styles';

const Text = ({ text, color, fontSize }) => {
	return (
		<StyledText color={color} fontSize={fontSize}>
			{text}
		</StyledText>
	);
};

export default Text;
