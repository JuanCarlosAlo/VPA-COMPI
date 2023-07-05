import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledTaskComponent = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
border: 2px solid ${COLORS.MAIN};
border-radius: 1rem;
padding-left: 1rem;
padding-right: 1rem;
`

const StyledDateContainer = styled.div`
display: flex;
gap: 1rem;
align-items: center;


`

const StyledInfoContainer = styled.div`
display: flex;
align-items: center;
gap: 1rem;
`

export { StyledTaskComponent, StyledDateContainer, StyledInfoContainer }