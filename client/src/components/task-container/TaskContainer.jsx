import { v4 } from 'uuid';
import { StyledMainContainer, StyledTaskContainer } from './styles';
import TaskConponent from '../../components/task-component/TaskComponent';
import Calendar from '../calendar/Calendar';
import { getCalendarDays } from '../../utils/getCalendarDays';
import { DEFAULT_FILTER, useFilterTasks } from '../../hooks/useTaskFilter';
import SecondaryButton from '../secondary-button/SecondaryButton';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';
import Text from '../text/Text';

const TaskContainer = ({ tasks, setFetchInfo }) => {
	const allDays = getCalendarDays(new Date());
	const { filteredTasks, filter, setFilter } = useFilterTasks(tasks);

	return (
		<StyledMainContainer>
			<SecondaryButton
				align={MEASUREMENTS.ALIGN.LEFT}
				setState={setFilter}
				setValue={DEFAULT_FILTER}
				color={COLORS.MAIN}
				text={'Show All'}
			/>

			<Calendar
				tasks={tasks}
				allDays={allDays}
				setFilter={setFilter}
				filter={filter}
			/>
			<StyledTaskContainer>
				{filteredTasks.length > 0 ? (
					<>
						{filteredTasks.map(task => (
							<TaskConponent
								key={v4()}
								task={task}
								setFetchInfo={setFetchInfo}
							/>
						))}
					</>
				) : (
					<Text
						align={MEASUREMENTS.ALIGN.CENTER}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
						text={'You have no tasks!'}
						color={COLORS.MAIN}
					/>
				)}
			</StyledTaskContainer>
		</StyledMainContainer>
	);
};

export default TaskContainer;
