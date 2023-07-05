import { useContext } from 'react';
import { MEASUREMENTS } from '../../constants/measurements';
import { getPriorityLevel } from '../../utils/getPriorityLevels';
import { getDateToPrint, getTimeToPrint } from '../../utils/getTimeToPrint';
import Text from '../text/Text';
import Title from '../title/Title';
import {
	StyledDateContainer,
	StyledInfoContainer,
	StyledTaskComponent
} from './styles';
import { AuthContext } from '../../context/Auth.context';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';
import { TASKS_URLS } from '../../constants/urls';

const TaskComponent = ({ task, setFetchInfo }) => {
	const { currentUser } = useContext(AuthContext);
	return (
		<StyledTaskComponent>
			<StyledInfoContainer>
				<input
					type='checkBox'
					onChange={() => handleChange(setFetchInfo, task, currentUser)}
					checked={task.taskCompletion}
				/>
				<div>
					<Title
						align={MEASUREMENTS.ALIGN.LEFT}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
						margin={'0.2rem'}
						text={task.taskText}
					/>

					<StyledDateContainer>
						<Text
							align={MEASUREMENTS.ALIGN.LEFT}
							fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
							text={getDateToPrint(task.taskDate)}
						/>
						<Text
							align={MEASUREMENTS.ALIGN.LEFT}
							fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
							text={getTimeToPrint(task.taskDate)}
						/>
					</StyledDateContainer>
				</div>
			</StyledInfoContainer>
			<div>
				<Text
					align={MEASUREMENTS.ALIGN.RIGHT}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
					text={task.taskType}
				/>
				<Text
					align={MEASUREMENTS.ALIGN.RIGHT}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
					text={getPriorityLevel(task.taskPriority)}
				/>
			</div>
		</StyledTaskComponent>
	);
};

const handleChange = async (setFetchInfo, task, currentUser) => {
	try {
		await setFetchInfo({
			url: TASKS_URLS.COMPLETE_TASK + currentUser._id,
			options: {
				method: METHODS.PATCH,
				body: JSON.stringify({
					_id: task._id,

					taskCompletion: !task.taskCompletion
				}),
				headers: HEADERS
			}
		});
	} catch (error) {
		console.log(error);
	}
};

export default TaskComponent;
