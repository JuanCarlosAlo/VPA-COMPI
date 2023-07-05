import styled from "styled-components";
import { COLORS } from "../../constants/colors";


const StyledCalendar = styled.div`
display: flex;
align-items: center;
gap: 1rem;
overflow-x: scroll;
width: 100%;


`

const StyledCalendarNumber = styled.p`
position: relative;
font-weight:${({ task }) => {
        if (task) { return '800' } else { return '500' }
    }}; ;
      margin: 0;
&::after{
    content: '';
    position: absolute;
    top: 0;
    right: -5px;
    height: 5px;
    width: 5px;
    background-color: ${COLORS.MAIN};
    border-radius: 50%;
  
    display: ${({ task }) => {
        if (task) { return 'block' } else { return 'none' }
    }};

}
`
const StyledCalendarDay = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
cursor: pointer;
`

export { StyledCalendar, StyledCalendarNumber, StyledCalendarDay }