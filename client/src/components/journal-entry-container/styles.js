import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';

const StyledJournalEntry = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${COLORS.WHITE};
	width: 100%;
	border-radius: 1rem;
	padding-left: 1rem;
	padding-right: 1rem;
	margin-bottom: 1rem;
	cursor: pointer;
	&:hover{
		background-color: ${COLORS.MAIN};
		color: ${COLORS.WHITE};
	}
`;

const StyledJournalEntryTitle = styled.p`
	font-weight: ${MEASUREMENTS.FONTS_WEIGHT.BOLD};
`;

export { StyledJournalEntry, StyledJournalEntryTitle };
