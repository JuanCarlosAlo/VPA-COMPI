import { Navigate, useLocation } from 'react-router-dom';
import PageComponent from '../../components/page-component/PageComponent';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import PageContainer from '../../components/page-container/PageContainer';
import Text from '../../components/text/Text';
import InputContainer from '../../components/InputContainer/InputContainer';
import { JOURNAL_URLS } from '../../constants/urls';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';
import { useForm } from 'react-hook-form';
import { useFetch } from '../../hooks/useFetch';
import { MEASUREMENTS } from '../../constants/measurements';
import { FORM_VALIDATIONS } from '../../constants/formValidations';
import { COLORS } from '../../constants/colors';
import { StyledTexboxInput } from './styles';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';

const EditJournalEntry = () => {
	const { state } = useLocation();
	const { currentUser } = useContext(AuthContext);

	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });

	const { setFetchInfo } = useFetch();
	if (!state) return <Navigate to={'/journal'} />;
	return (
		<PageComponent>
			<Secondaryheader url={'/journal'} />
			<PageContainer>
				<form
					onSubmit={handleSubmit((formData, e) =>
						onSubmit(formData, e, setFetchInfo, currentUser, state)
					)}
				>
					<Text
						text={`Date: ${new Date(
							state.journalEntryCreation
						).toLocaleDateString()}`}
						align={MEASUREMENTS.ALIGN.LEFT}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
					/>
					<InputContainer
						errors={errors}
						keyForm={'journalEntryTitle'}
						label={'Title'}
						register={register}
						type={'text'}
						defaultValue={state.journalEntryTitle}
					/>

					<StyledTexboxInput
						name='journalEntryText'
						{...register('journalEntryText', FORM_VALIDATIONS.journalEntry)}
						placeholder='Write your entry here'
						defaultValue={state.journalEntryText}
					/>
					<p>{errors?.text?.message}</p>
					<button>Accept</button>
					{/* <SecondaryButton
						align={MEASUREMENTS.ALIGN.CENTER}
						color={COLORS.MAIN}
						text={'Accept'}
					/> */}
				</form>
			</PageContainer>
		</PageComponent>
	);
};

const onSubmit = async (formData, e, setFetchInfo, currentUser, state) => {
	e.preventDefault();
	const { journalEntryTitle, journalEntryText } = formData;
	const currentDate = Date.now();
	try {
		await setFetchInfo({
			url: JOURNAL_URLS.EDIT_ENTRY + currentUser._id,
			options: {
				method: METHODS.PATCH,
				body: JSON.stringify({
					_id: state._id,
					userId: currentUser._id,
					journalEntryTitle,
					journalEntryText,
					journalEntryEdited: currentDate,
					journalEntryImgs: []
				}),
				headers: HEADERS
			},
			navigateTo: `/journal`
		});
	} catch (error) {
		console.log(error);
	}
};

export default EditJournalEntry;
