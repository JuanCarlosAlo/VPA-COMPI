import { Navigate, useLocation } from 'react-router-dom';
import PageContainer from '../../components/page-container/PageContainer';
import PageComponent from '../../components/page-component/PageComponent';
import { useFetch } from '../../hooks/useFetch';
import { useContext, useEffect, useState } from 'react';
import chatSocket from '../../sockets/socket';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import ChatContainer from '../../components/chat-container/ChatContainer';
import { v4 } from 'uuid';
import { HEADERS } from '../../constants/headers';
import { AuthContext } from '../../context/Auth.context';
import { CHAT_URLS } from '../../constants/urls';
import { METHODS } from '../../constants/methods';
import MessageContainer from '../../components/message-container/MessageContainer';
import { getDateToPrint } from '../../utils/getTimeToPrint';

const Chatroom = () => {
	const { currentUser } = useContext(AuthContext);
	const { state } = useLocation();
	console.log(state);
	const { setFetchInfo } = useFetch();
	const [messages, setMessages] = useState([...state.messages]);
	useEffect(() => {
		chatSocket.on('message', data => {
			// sintaxis para acceder a los valores del state en tiempo real
			setMessages(prevMessages => [...prevMessages, data]);
		});
	}, []);

	if (!state) return <Navigate to={'/chat'} />;
	return (
		<PageComponent>
			<Secondaryheader url={'/chat'} />
			<PageContainer>
				<ChatContainer>
					{messages.length === 0 && <p>no messages</p>}
					{messages.map(message => (
						<MessageContainer
							key={message._id}
							date={getDateToPrint(message.messageCreation)}
							message={message.messageText}
						/>
					))}
				</ChatContainer>
				<form
					onSubmit={e =>
						handleSubmit(e, messages, currentUser, setFetchInfo, state)
					}
				>
					<div>
						<input type='text' name='message' />
						<button type='submit'>Send</button>
					</div>
				</form>
			</PageContainer>
		</PageComponent>
	);
};

const handleSubmit = async (e, messages, currentUser, setFetchInfo, state) => {
	e.preventDefault();
	const newMessage = {
		_id: v4(),
		messageCreator: currentUser._id,
		messageText: e.target.message.value,
		messageCreation: Date.now()
	};

	try {
		await setFetchInfo({
			url: CHAT_URLS.ADD_MESSAGE + currentUser._id,
			options: {
				method: METHODS.POST,
				body: JSON.stringify({
					chatroomId: state._id,
					userId: currentUser._id,
					message: newMessage
				}),
				headers: HEADERS
			}
		});
	} catch (error) {
		console.log(error);
	}

	chatSocket.emit('message', newMessage);
	e.target.reset();
};

export default Chatroom;
