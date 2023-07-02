import { getCalendarDays } from '../../utils/getCalendarDays';
import { v4 } from 'uuid';
import { StyledCalendar } from './styles';
const Calendar = () => {
	const currentDate = new Date();
	const allDays = getCalendarDays(currentDate);
	console.log(allDays);
	return (
		<StyledCalendar>
			{allDays.map(day => (
				<div key={v4()}>
					<p>{day.dayNumber}</p>
					<p>{day.monthName}</p>
				</div>
			))}
		</StyledCalendar>
	);
};

export default Calendar;
