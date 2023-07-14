import { useContext } from 'react';
import PageComponent from '../../components/page-component/PageComponent';
import PageContainer from '../../components/page-container/PageContainer';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import { AuthContext } from '../../context/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import { NOTES_URLS } from '../../constants/urls';
import { StyledNotesColumsContainer } from './styles';
import NoteContainer from '../../components/note-container/NoteContainer';

const Notes = () => {
	const { currentUser } = useContext(AuthContext);
	const { data, loading } = useFetch({
		url: NOTES_URLS.ALL_NOTES + currentUser._id
	});

	if (loading) return <p>...Loanding</p>;
	return (
		<PageComponent>
			<Secondaryheader
				url={'/'}
				secondButton={true}
				secondText={'+ New Note'}
				secondUrl={'/new-note'}
			/>
			<PageContainer>
				{!data || data.notes.length === 0 ? (
					<p>There is not notes yet</p>
				) : (
					<StyledNotesColumsContainer>
						{data.notes.map(note => (
							<NoteContainer key={note._id} note={note} />
						))}
					</StyledNotesColumsContainer>
				)}
			</PageContainer>
		</PageComponent>
	);
};

export default Notes;
