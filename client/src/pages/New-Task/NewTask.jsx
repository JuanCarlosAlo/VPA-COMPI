import { useContext, useState } from 'react';
import InputContainer from '../../components/InputContainer/InputContainer';
import PageComponent from '../../components/page-component/PageComponent';
import PageContainer from '../../components/page-container/PageContainer';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import { AuthContext } from '../../context/Auth.context';
import { useForm } from 'react-hook-form';
import { useFetch } from '../../hooks/useFetch';
import { FORM_VALIDATIONS } from '../../constants/formValidations';

import { getDateTime } from '../../utils/getDateTime';
import { getHoursAndMinutes } from '../../utils/getHoursAndMinutes';
import { TASKS_URLS } from '../../constants/urls';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';

import { SELECT_OPTIONS } from '../../constants/selectOptions';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';
import { StyledDatePicker, StyledForm, StyledTimePicker } from './styles';

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
			<Secondaryheader url={'/tasks'} />
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
					<StyledDatePicker
						selected={selectedDate}
						onChange={date => {
							setSelectedDate(date);
						}}
						dateFormat='dd/MM/yyyy'
						placeholderText='Select a date'
					/>
					<label htmlFor='time'>Select time</label>
					<StyledTimePicker
						onChange={time => setSelectedTime(time)}
						showSecond={false}
						hideDisabledOptions
						minuteStep={5}
						use12Hours
					/>
					<InputContainer
						errors={errors}
						label={'Type'}
						register={register}
						options={SELECT_OPTIONS.TYPE}
						keyForm={'taskType'}
					/>
					<InputContainer
						errors={errors}
						label={'Priority'}
						register={register}
						options={SELECT_OPTIONS.PRIORITY}
						keyForm={'taskPriority'}
					/>

					<SecondaryButton
						align={MEASUREMENTS.ALIGN.CENTER}
						color={COLORS.MAIN}
						text={'Accept'}
					/>
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
	console.log(formData, selectedDate, selectedTime);
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
