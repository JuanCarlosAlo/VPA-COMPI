import { Navigate, useLocation } from 'react-router-dom';
import PageComponent from '../../components/page-component/PageComponent';
import PageContainer from '../../components/page-container/PageContainer';
import { StyledEntryContainer, StyledTitleContainer } from './styles';
import Text from '../../components/text/Text';

import Title from '../../components/title/Title';
import { MEASUREMENTS } from '../../constants/measurements';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import Slider from '../../components/slider/Slider';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
import { useState } from 'react';
import Modal from '../../components/modal/Modal';
import DeleteModal from '../../components/delete-modal/DeleteModal';
import { COLORS } from '../../constants/colors';
import { JOURNAL_URLS } from '../../constants/urls';

const JournalEntry = () => {
	const { state } = useLocation();
	const [content, setContent] = useState(null);
	if (!state) return <Navigate to={'/journal'} />;
	return (
		<>
			<PageComponent>
				<Secondaryheader
					url={'/journal'}
					secondButton={true}
					secondText={'Edit'}
					secondUrl={`/edit-entry`}
					state={state}
				/>
				<PageContainer>
					<StyledTitleContainer>
						<div>
							<Title
								text={state.journalEntryTitle}
								align={MEASUREMENTS.ALIGN.LEFT}
								fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
								margin={'0.5rem'}
								color={COLORS.WHITE}
							/>
							<Text
								text={new Date(state.journalEntryCreation).toLocaleDateString()}
								align={MEASUREMENTS.ALIGN.LEFT}
								fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
								color={COLORS.WHITE}
							/>
						</div>
						<SecondaryButton
							align={MEASUREMENTS.ALIGN.RIGHT}
							setState={setContent}
							setValue={
								<DeleteModal
									setContent={setContent}
									title={state.journalEntryTitle}
									fetchUrl={JOURNAL_URLS.DELETE_ENTRY}
									id={state._id}
									navigateTo={'/journal'}
								/>
							}
							text={'Delete Entry'}
							color={COLORS.WHITE}
							bgcolor={COLORS.MAIN}
						/>
					</StyledTitleContainer>
					<StyledEntryContainer>
						<Text
							align={MEASUREMENTS.ALIGN.LEFT}
							text={state.journalEntryText}
							fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
							color={COLORS.WHITE}
						/>
					</StyledEntryContainer>
					{state.journalEntryImgs.length > 0 && (
						<Slider imgs={state.journalEntryImgs} />
					)}
				</PageContainer>
			</PageComponent>
			<Modal>{content}</Modal>
		</>
	);
};

export default JournalEntry;
