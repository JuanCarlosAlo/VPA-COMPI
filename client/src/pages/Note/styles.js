import styled from "styled-components";

const StyledTitleContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 1rem;
padding-right: 1rem;
padding-top: 1rem;
width: 100%;
`
const StyledNoteContainer = styled.div`
padding-left: 1rem;
padding-right: 1rem;
width: 100%;
overflow-y: scroll;
`

export { StyledTitleContainer, StyledNoteContainer }