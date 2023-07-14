import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledChatroomContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
padding-left: 1rem;
padding-right: 1rem;
border-radius: 1rem;
border: 2px solid ${COLORS.MAIN};
cursor: pointer;
&:hover{
    border: none; 
    background-color: ${COLORS.MAIN};
    color: ${COLORS.WHITE};
}
`

export { StyledChatroomContainer }