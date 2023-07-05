import PageComponent from '../../components/page-component/PageComponent';
import PageContainer from '../../components/page-container/PageContainer';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';

const Chat = () => {
	return (
		<PageComponent>
			<Secondaryheader url={'/home'} />
			<PageContainer>Chat</PageContainer>
		</PageComponent>
	);
};

export default Chat;
