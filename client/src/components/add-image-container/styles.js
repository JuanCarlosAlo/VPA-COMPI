import styled from 'styled-components';

const StyledImgsContainer = styled.div`
display: flex;
align-items: center;
gap: 1rem;

justify-content: center;
height: 100px;
width: 100%;
overflow-x: scroll;
margin-bottom: 1rem;
`


const StyledCrossIcon = styled.div`
position: absolute;
top: 2px;
left: 2px;
height: 20px;
width: 20px;
border-radius: 50%;
background-image: url('/images/cross.svg');
background-size: contain;
background-color: #fff;
cursor: pointer;
`

const StyledImg = styled.img`
height: 60px;
width: 60px;
object-fit: contain;
`
const StyledNewImgContainer = styled.div`
position: relative;
height: 60px;
min-width: 60px;


`
export { StyledImgsContainer, StyledCrossIcon, StyledNewImgContainer, StyledImg };
