import { useContext } from 'react';
import PageComponent from '../../components/page-component/PageComponent';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import { AuthContext } from '../../context/Auth.context';

const Journal = () => {
	const { currentUser } = useContext(AuthContext);
	console.log(currentUser);
	return (
		<PageComponent>
			<Secondaryheader
				url={'/home'}
				secondButton={true}
				secondText={'+ New entry'}
				secondUrl={'/new-entry'}
			/>
			Journal
			<div>
				{currentUser.journalEntries.length === 0 ? (
					<p>There is not entries yet in your journal</p>
				) : (
					currentUser.journalEntries.journalsEntries.map(entrie => (
						<div key={entrie.journalEntrie_id}>{entrie.JournalEntrieTitle}</div>
					))
				)}
			</div>
		</PageComponent>
	);
};

export default Journal;
