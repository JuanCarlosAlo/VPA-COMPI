import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledTitleContainer = styled.div`
	display: flex;

	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding-left: 1rem;
	padding-right: 1rem;
	border-bottom: 2px solid ${COLORS.MAIN};
`;
const StyledEntryContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	overflow-y: scroll;
	padding-left: 1rem;
	padding-right: 1rem;
	height: 100%;
	width: 100%;
`;
export { StyledTitleContainer, StyledEntryContainer };
