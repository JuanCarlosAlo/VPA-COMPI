import { StyledJournalEntry, StyledJournalEntryTitle } from './styles';
import { useNavigate } from 'react-router-dom';
const JournalEntryContainer = ({ entry }) => {
	const navigate = useNavigate();
	return (
		<StyledJournalEntry
			onClick={() => navigate('/journal-entry', { state: entry })}
		>
			<StyledJournalEntryTitle>
				{entry.journalEntryTitle}
			</StyledJournalEntryTitle>
			<p>{new Date(entry.journalEntryCreation).toLocaleDateString()}</p>
		</StyledJournalEntry>
	);
};

export default JournalEntryContainer;
