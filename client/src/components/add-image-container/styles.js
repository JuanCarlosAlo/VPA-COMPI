import styled from 'styled-components';
import { COLORS } from '../../constants/colors';


const StyledAddImgContainer = styled.div`
height: fit-content;
margin-bottom: 1rem;
`
const StyledImgsContainer = styled.div`
display: flex;
align-items: center;
gap: 1rem;
justify-content: center;
height: 70px;
width: 100%;
overflow-x: scroll;

`
const StyledCrossIcon = styled.div`
position: absolute;
top: 2px;
left: 2px;
height: 15px;
width: 15px;
background-image: url('/images/cross.svg');
background-size: contain;
background-color: ${COLORS.BLACK_TRANSPARENT};
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
export { StyledImgsContainer, StyledCrossIcon, StyledNewImgContainer, StyledImg, StyledAddImgContainer };
