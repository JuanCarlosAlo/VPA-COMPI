import { useContext } from 'react';
import PageComponent from '../../components/page-component/PageComponent';
import PageContainer from '../../components/page-container/PageContainer';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import { useFetch } from '../../hooks/useFetch';
import { AuthContext } from '../../context/Auth.context';
import { CHAT_URLS } from '../../constants/urls';
import { getDateToPrint } from '../../utils/getTimeToPrint';
import ChatroomContainer from '../../components/chatroom-container/ChatroomContainer';

const Chat = () => {
	const { currentUser } = useContext(AuthContext);
	const { data, loading } = useFetch({
		url: CHAT_URLS.ALL_CHATS + currentUser._id
	});
	if (loading) return <p>...Loanding</p>;
	console.log(data);
	return (
		<PageComponent>
			<Secondaryheader
				url={'/home'}
				secondButton={true}
				secondText={'New Chat'}
				secondUrl={'/new-chat'}
			/>
			<PageContainer scroll={true}>
				{!data || data.chatRooms.length === 0 ? (
					<p>There is not conversations yet!</p>
				) : (
					data.chatRooms.map(chatRoom => (
						<ChatroomContainer
							key={chatRoom._id}
							date={getDateToPrint(chatRoom.chatRoomLastRegistration)}
							title={chatRoom.chatRoomTitle}
							chatroom={chatRoom}
							url={'/chatroom/' + chatRoom._id}
						/>
					))
				)}
			</PageContainer>
		</PageComponent>
	);
};

export default Chat;
