import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledChatContainer = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;
height:90%;
width: 100%;
padding: 1rem;
background-color: ${COLORS.MAIN};
overflow-y: scroll;
`

export { StyledChatContainer }