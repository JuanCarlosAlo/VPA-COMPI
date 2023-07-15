import { useState } from 'react';
import PageComponent from '../../components/page-component/PageComponent';
import PageContainer from '../../components/page-container/PageContainer';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import { Navigate, useLocation } from 'react-router-dom';
import Text from '../../components/text/Text';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
import DeleteModal from '../../components/delete-modal/DeleteModal';
import { NOTES_URLS } from '../../constants/urls';
import Modal from '../../components/modal/Modal';
import { StyledNoteContainer, StyledTitleContainer } from './styles';

const Note = () => {
	const { state } = useLocation();
	const [content, setContent] = useState(null);
	if (!state) return <Navigate to={'/notes'} />;
	return (
		<>
			<PageComponent>
				<Secondaryheader
					url={'/notes'}
					secondButton={true}
					secondText={'Edit note'}
					secondUrl={'/edit-note'}
					state={state}
				/>
				<PageContainer>
					<StyledTitleContainer>
						<Text
							align={MEASUREMENTS.ALIGN.LEFT}
							fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
							color={COLORS.MAIN}
							text={state.noteTitle}
						/>
						<SecondaryButton
							align={MEASUREMENTS.ALIGN.RIGHT}
							setState={setContent}
							setValue={
								<DeleteModal
									setContent={setContent}
									title={state?.noteTitle ? state.noteTitle : 'this note'}
									fetchUrl={NOTES_URLS.DELETE_NOTE}
									id={state._id}
									navigateTo={'/notes'}
								/>
							}
							text={'Delete Note'}
							color={COLORS.MAIN}
						/>
					</StyledTitleContainer>
					<StyledNoteContainer>
						<Text
							align={MEASUREMENTS.ALIGN.LEFT}
							fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
							color={COLORS.MAIN}
							text={state.noteText}
						/>
					</StyledNoteContainer>
				</PageContainer>
			</PageComponent>
			<Modal>{content}</Modal>
		</>
	);
};

export default Note;
