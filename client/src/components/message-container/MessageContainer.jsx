import { StyledDate, StyledMessage, StyledMessageContainer } from './styles';

const MessageContainer = ({ message, date }) => {
	return (
		<StyledMessageContainer>
			<StyledMessage>{message}</StyledMessage>
			<StyledDate>{date}</StyledDate>
		</StyledMessageContainer>
	);
};

export default MessageContainer;
