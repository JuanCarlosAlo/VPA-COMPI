import { useNavigate } from 'react-router-dom';
import { MEASUREMENTS } from '../../constants/measurements';
import Text from '../text/Text';
import { StyledNoteElement } from './styles';

const NoteContainer = ({ note }) => {
	const navigate = useNavigate();
	console.log(note);
	return (
		<StyledNoteElement onClick={() => navigate('/note', { state: note })}>
			{note.noteTitle && (
				<Text
					align={MEASUREMENTS.ALIGN.LEFT}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
					text={note.noteTitle}
				/>
			)}
			<Text
				align={MEASUREMENTS.ALIGN.LEFT}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
				text={note.noteText}
			/>
		</StyledNoteElement>
	);
};

export default NoteContainer;
