import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';

const StyledPageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 70%;
  width: calc(100% - ${MEASUREMENTS.PADDING.MOBILE_OUTSIDE} - ${MEASUREMENTS.PADDING.MOBILE_OUTSIDE});
  background-color: ${COLORS.WHITE};
  border: 4px solid ${COLORS.MAIN};
  border-radius: 1rem;
  padding: 1rem;
 
`;

export { StyledPageContainer };
