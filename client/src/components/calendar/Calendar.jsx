import { v4 } from 'uuid';
import {
	StyledCalendar,
	StyledCalendarDay,
	StyledCalendarNumber
} from './styles';
import { getDateToPrint } from '../../utils/getTimeToPrint';

const Calendar = ({ tasks, allDays, setFilter, filter }) => {
	return (
		<StyledCalendar>
			{allDays.map(day => (
				<StyledCalendarDay
					key={v4()}
					onClick={() => setFilter({ ...filter, date: day.dateString })}
				>
					<StyledCalendarNumber task={dateComparation(day.dateString, tasks)}>
						{day.dayNumber}
					</StyledCalendarNumber>
					<p>{day.monthName}</p>
				</StyledCalendarDay>
			))}
		</StyledCalendar>
	);
};

const dateComparation = (calendarDay, tasks) => {
	if (!tasks) return;
	return tasks.some(task => calendarDay === getDateToPrint(task.taskDate));
};

export default Calendar;
