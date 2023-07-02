import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledTitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 100%;
	border-bottom: 2px solid ${COLORS.MAIN};
`;
const StyledEntryContainer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	overflow-y: scroll;
	height: 100%;
	width: 100%;
`;
export { StyledTitleContainer, StyledEntryContainer };
