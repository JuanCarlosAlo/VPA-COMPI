import { useContext, useEffect, useState } from 'react';
import ChatContainer from '../../components/chat-container/ChatContainer';
import PageComponent from '../../components/page-component/PageComponent';
import PageContainer from '../../components/page-container/PageContainer';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import chatSocket from '../../sockets/socket';
import { v4 } from 'uuid';
import { AuthContext } from '../../context/Auth.context';
import { CHAT_URLS } from '../../constants/urls';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';
import { useFetch } from '../../hooks/useFetch';
import { CHATROOM_DEFAULT_VALUES } from '../../constants/newChatRoomDefaultValues';

const NewChat = () => {
	const { currentUser } = useContext(AuthContext);
	const { setFetchInfo } = useFetch();
	const [messages, setMessages] = useState([]);
	useEffect(() => {
		chatSocket.on('message', data => {
			// sintaxis para acceder a los valores del state en tiempo real
			setMessages(prevMessages => [...prevMessages, data]);
		});
	}, []);

	return (
		<PageComponent>
			<Secondaryheader url={'/chat'} />
			<PageContainer>
				<ChatContainer>
					{messages.length === 0 && <p>no messages</p>}
					{messages.map(message => (
						<p key={v4()}>{message.messageText}</p>
					))}
				</ChatContainer>
				<form
					onSubmit={e => handleSubmit(e, messages, currentUser, setFetchInfo)}
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

const handleSubmit = async (e, messages, currentUser, setFetchInfo) => {
	e.preventDefault();
	const newMessage = {
		_id: v4(),
		messageCreator: currentUser._id,
		messageText: e.target.message.value,
		messageCreation: Date.now()
	};
	if (messages.length === 0) {
		try {
			await setFetchInfo({
				url: CHAT_URLS.CREATE_CHAT + currentUser._id,
				options: {
					method: METHODS.POST,
					body: JSON.stringify({
						userId: currentUser._id,
						chatRoomTitle: newMessage.messageText,
						...CHATROOM_DEFAULT_VALUES,
						messages: newMessage
					}),
					headers: HEADERS
				}
			});
		} catch (error) {
			console.log(error);
		}
	} else {
		try {
			await setFetchInfo({
				url: CHAT_URLS.ADD_MESSAGE + currentUser._id,
				options: {
					method: METHODS.POST,
					body: JSON.stringify({
						chatroomId: CHATROOM_DEFAULT_VALUES.chatroomId,
						userId: currentUser._id,
						message: newMessage
					}),
					headers: HEADERS
				}
			});
		} catch (error) {
			console.log(error);
		}
	}

	chatSocket.emit('message', newMessage);
	e.target.reset();
};

export default NewChat;
