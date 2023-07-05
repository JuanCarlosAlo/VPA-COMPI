import { useContext, useState } from 'react';
import InputContainer from '../../components/InputContainer/InputContainer';
import PageComponent from '../../components/page-component/PageComponent';
import PageContainer from '../../components/page-container/PageContainer';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import { AuthContext } from '../../context/Auth.context';
import { useForm } from 'react-hook-form';
import { useFetch } from '../../hooks/useFetch';
import { FORM_VALIDATIONS } from '../../constants/formValidations';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import { StyledForm } from './styles';
import { getDateTime } from '../../utils/getDateTime';
import { getHoursAndMinutes } from '../../utils/getHoursAndMinutes';
import { TASKS_URLS } from '../../constants/urls';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';

const NewTask = () => {
	const { currentUser } = useContext(AuthContext);
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [selectedTime, setSelectedTime] = useState(getHoursAndMinutes());
	const { setFetchInfo } = useFetch();

	return (
		<PageComponent>
			<Secondaryheader />
			<PageContainer>
				<StyledForm
					onSubmit={handleSubmit((formData, e) =>
						onSubmit(
							formData,
							e,
							setFetchInfo,
							currentUser,
							selectedDate,
							selectedTime
						)
					)}
				>
					<InputContainer
						errors={errors}
						keyForm={'taskText'}
						label={'Task'}
						register={register}
						formValidation={FORM_VALIDATIONS.task}
						type={'text'}
					/>
					<label htmlFor='date'>Choose a date</label>
					<DatePicker
						selected={selectedDate}
						onChange={date => {
							setSelectedDate(date);
						}}
						dateFormat='dd/MM/yyyy'
						placeholderText='Select a date'
					/>
					<label htmlFor='time'>Choose wich time</label>
					<TimePicker
						onChange={time => setSelectedTime(time)}
						value={selectedTime}
					/>
					<div>
						<label htmlFor='taskType'>Type</label>
						<select name='taskType' id='' {...register('taskType')}>
							<option value='personal'>Personal</option>
							<option value='work'>Work</option>
						</select>
					</div>
					<div>
						<label htmlFor='taskPriority'>Priority</label>
						<select name='taskPriority' id='' {...register('taskPriority')}>
							<option value='1'>Low</option>
							<option value='2'>Medium</option>
							<option value='3'>High</option>
							<option value='4'>Very High</option>
						</select>
					</div>
					<button>Accept</button>
				</StyledForm>
			</PageContainer>
		</PageComponent>
	);
};

const onSubmit = async (
	formData,
	e,
	setFetchInfo,
	currentUser,
	selectedDate,
	selectedTime
) => {
	e.preventDefault();
	console.log(formData, getDateTime(selectedDate, selectedTime));
	const { taskPriority, taskText, taskType } = formData;
	try {
		await setFetchInfo({
			url: TASKS_URLS.CREATE_TASK + currentUser._id,
			options: {
				method: METHODS.POST,
				body: JSON.stringify({
					userId: currentUser._id,
					taskCreation: Date.now(),
					taskDate: getDateTime(selectedDate, selectedTime),
					taskText,
					taskType,
					taskPriority: Number(taskPriority),
					taskCompletion: false
				}),
				headers: HEADERS
			},
			navigateTo: `/tasks`
		});
	} catch (error) {
		console.log(error);
	}
};

export default NewTask;
