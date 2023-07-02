import { Navigate, useLocation } from 'react-router-dom';
import PageComponent from '../../components/page-component/PageComponent';
import PageContainer from '../../components/page-container/PageContainer';
import { StyledEntryContainer, StyledTitleContainer } from './styles';
import Text from '../../components/text/Text';
import { v4 } from 'uuid';
import Title from '../../components/title/Title';
import { MEASUREMENTS } from '../../constants/measurements';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';

const JournalEntry = () => {
	const { state } = useLocation();
	if (!state) return <Navigate to={'/journal'} />;
	return (
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
					<Title
						text={state.journalEntryTitle}
						align={MEASUREMENTS.ALIGN.LEFT}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
						margin={'0.5rem'}
					/>
					<Text
						text={new Date(state.journalEntryCreation).toLocaleDateString()}
						align={MEASUREMENTS.ALIGN.LEFT}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
					/>
				</StyledTitleContainer>
				<StyledEntryContainer>
					<Text
						align={MEASUREMENTS.ALIGN.LEFT}
						text={state.journalEntryText}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
					/>
					{state.journalEntryImgs.length > 1 &&
						state.journalEntryImgs.map(img => (
							<img key={v4()} src={img} alt='' />
						))}
				</StyledEntryContainer>
			</PageContainer>
		</PageComponent>
	);
};

export default JournalEntry;
