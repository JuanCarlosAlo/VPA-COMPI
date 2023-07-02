import { useContext } from 'react';
import PageComponent from '../../components/page-component/PageComponent';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import { AuthContext } from '../../context/Auth.context';
import { JOURNAL_URLS } from '../../constants/urls';
import { useFetch } from '../../hooks/useFetch';
import PageContainer from '../../components/page-container/PageContainer';
import JournalEntryContainer from '../../components/journal-entry-container/JournalEntryContainer';

const Journal = () => {
	const { currentUser } = useContext(AuthContext);
	const { data, loading } = useFetch({
		url: JOURNAL_URLS.ALL_ENTRIES + currentUser._id
	});

	if (loading) return <h2>Loading</h2>;

	return (
		<PageComponent>
			<Secondaryheader
				url={'/home'}
				secondButton={true}
				secondText={'+ New entry'}
				secondUrl={'/new-entry'}
			/>

			<PageContainer scroll={true}>
				{!data || data.journalsEntries.length === 0 ? (
					<p>There is not entries yet in your journal</p>
				) : (
					data.journalsEntries.map(entry => (
						<JournalEntryContainer key={entry._id} entry={entry} />
					))
				)}
			</PageContainer>
		</PageComponent>
	);
};

export default Journal;
