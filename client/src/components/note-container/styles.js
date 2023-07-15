import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledNoteElement = styled.div`
display: flex;
flex-direction:column;
align-items: flex-start;
white-space:wrap;
overflow: hidden;
text-overflow: ellipsis;
width:100%;
background-color: ${COLORS.MAIN};
color: ${COLORS.WHITE};
height:  150px;
border-radius: 0.5rem;
padding: 1rem;
cursor: pointer;
`
export { StyledNoteElement }