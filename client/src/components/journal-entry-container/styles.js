import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';

const StyledJournalEntry = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${COLORS.UNACTIVE};
	width: 100%;
	padding-left: 1rem;
	padding-right: 1rem;
	margin-bottom: 1rem;
	border: 2px solid ${COLORS.MAIN};
	color: ${COLORS.WHITE};
	
	cursor: pointer;
	&:hover{
		background-color: ${COLORS.WHITE};
		color: ${COLORS.MAIN};
	}
`;

const StyledJournalEntryTitle = styled.p`
	font-weight: ${MEASUREMENTS.FONTS_WEIGHT.BOLD};
`;

export { StyledJournalEntry, StyledJournalEntryTitle };
