import { useContext } from 'react';
import PageComponent from '../../components/page-component/PageComponent';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import { AuthContext } from '../../context/Auth.context';
import { JOURNAL_URLS } from '../../constants/urls';
import { useFetch } from '../../hooks/useFetch';

const Journal = () => {
	const { currentUser } = useContext(AuthContext);
	const { data, loading, error } = useFetch({
		url: JOURNAL_URLS.ALL_ENTRIES + currentUser._id
	});
	if (loading) return <h2>Loading</h2>;
	if (error) return <h2>error</h2>;
	console.log(data);
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
				{data.journalsEntries.length === 0 ? (
					<p>There is not entries yet in your journal</p>
				) : (
					data.journalsEntries.map(entrie => (
						<div key={entrie._id}>{entrie.journalEntryTitle}</div>
					))
				)}
			</div>
		</PageComponent>
	);
};

export default Journal;
