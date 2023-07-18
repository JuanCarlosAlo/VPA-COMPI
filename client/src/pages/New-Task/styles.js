
import styled from "styled-components";
import TimePicker from 'react-time-picker';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
`

const StyledTimePicker = styled(TimePicker)`
background-color: #fff;
width: 100%;
max-width: 350px;
  
`;

const StyledDatePicker = styled(DatePicker)`
background-color: #fff;
width: 100%;
max-width: 350px;
  
`

export { StyledForm, StyledDatePicker, StyledTimePicker }