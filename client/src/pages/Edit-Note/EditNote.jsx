import { Navigate, useLocation } from 'react-router-dom';
import PageComponent from '../../components/page-component/PageComponent';
import PageContainer from '../../components/page-container/PageContainer';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';
import { useForm } from 'react-hook-form';
import { useFetch } from '../../hooks/useFetch';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';
import { FORM_VALIDATIONS } from '../../constants/formValidations';
import { NOTES_URLS } from '../../constants/urls';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';
import InputContainer from '../../components/InputContainer/InputContainer';
import { StyledForm } from './styles';
import TextareaComponent from '../../components/textarea-component/TextareaComponent';

const EditNote = () => {
	const { state } = useLocation();
	const { currentUser } = useContext(AuthContext);

	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });

	const { setFetchInfo } = useFetch();
	if (!state) return <Navigate to={'/notes'} />;
	return (
		<PageComponent>
			<Secondaryheader url={'/note'} />
			<PageContainer>
				<StyledForm
					onSubmit={handleSubmit((formData, e) =>
						onSubmit(formData, e, setFetchInfo, currentUser, state)
					)}
				>
					{/* <Text
						text={`Date: ${new Date(
							state.journalEntryCreation
						).toLocaleDateString()}`}
						align={MEASUREMENTS.ALIGN.CENTER}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
					/> */}
					<InputContainer
						errors={errors}
						keyForm={'noteTitle'}
						register={register}
						type={'text'}
						defaultValue={state.noteTitle}
					/>

					<TextareaComponent
						formValidation={FORM_VALIDATIONS.note}
						name={'noteText'}
						placeHolder={'Write your note here'}
						register={register}
						defaultValue={state.noteText}
					/>
					<p>{errors?.text?.message}</p>

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

const onSubmit = async (formData, e, setFetchInfo, currentUser, state) => {
	e.preventDefault();
	const { noteTitle, noteText } = formData;

	try {
		await setFetchInfo({
			url: NOTES_URLS.EDIT_NOTE + currentUser._id,
			options: {
				method: METHODS.PATCH,
				body: JSON.stringify({
					_id: state._id,
					userId: currentUser._id,
					noteTitle,
					noteText
				}),
				headers: HEADERS
			},
			navigateTo: `/notes`
		});
	} catch (error) {
		console.log(error);
	}
};

export default EditNote;
