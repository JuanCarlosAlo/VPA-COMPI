import PageComponent from '../../components/page-component/PageComponent';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';

const Chat = () => {
	return (
		<PageComponent>
			<Secondaryheader url={'/home'} />
			Chat
		</PageComponent>
	);
};

export default Chat;
