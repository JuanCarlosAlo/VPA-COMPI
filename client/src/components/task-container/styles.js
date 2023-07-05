import styled from "styled-components";

const StyledMainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 2rem;

width: 100%;
height: 100%;
`

const StyledTaskContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: 1rem;
overflow-y: scroll;
width: 100%;
height: 60%;
`

export { StyledTaskContainer, StyledMainContainer }