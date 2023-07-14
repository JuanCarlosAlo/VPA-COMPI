import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledSliderContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
border-top: 2px solid ${COLORS.MAIN};
`

const StyledImg = styled.img`
height: 200px;
`

const StyledArrow = styled.img`
width: 40px;
cursor: pointer;
`

export { StyledImg, StyledSliderContainer, StyledArrow }