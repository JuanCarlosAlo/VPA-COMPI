import { useNavigate } from 'react-router-dom';
import { StyledChatroomContainer } from './styles';

const ChatroomContainer = ({ title, date, chatroom, url }) => {
	const navigate = useNavigate();
	return (
		<StyledChatroomContainer onClick={() => navigate(url, { state: chatroom })}>
			<p>{title}</p> <p>{date}</p>
		</StyledChatroomContainer>
	);
};

export default ChatroomContainer;
