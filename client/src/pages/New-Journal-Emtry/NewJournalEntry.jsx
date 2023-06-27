import { useContext } from 'react';
import PageComponent from '../../components/page-component/PageComponent';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import { AuthContext } from '../../context/Auth.context';

const NewJournalEntry = () => {
	const { currentUser } = useContext(AuthContext);
	console.log(currentUser);
	return (
		<PageComponent>
			<Secondaryheader url={'/journal'} />
			New entrie
		</PageComponent>
	);
};

export default NewJournalEntry;
