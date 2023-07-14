import styled from "styled-components"
import { COLORS } from "../../constants/colors"


const StyledNotesColumsContainer = styled.div`
display: grid;
grid-template-columns: repeat(2,calc(50% - 0.5rem));
align-content: flex-start;
gap: 1rem;
width: 100%;
height: 100%;
padding: 1rem;
overflow-y: scroll;
background-color: ${COLORS.MAIN};
`


export { StyledNotesColumsContainer }