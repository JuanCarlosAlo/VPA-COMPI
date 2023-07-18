import { useForm } from 'react-hook-form';
import PageComponent from '../../components/page-component/PageComponent';
import PageContainer from '../../components/page-container/PageContainer';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import Text from '../../components/text/Text';
import { MEASUREMENTS } from '../../constants/measurements';
import InputContainer from '../../components/InputContainer/InputContainer';
import { FORM_VALIDATIONS } from '../../constants/formValidations';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
import { COLORS } from '../../constants/colors';
import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';
import { NOTES_URLS } from '../../constants/urls';
import { StyledForm } from './styles';
import TextareaComponent from '../../components/textarea-component/TextareaComponent';

const NewNote = () => {
	const { currentUser } = useContext(AuthContext);
	const currentDate = Date.now();
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });

	const { setFetchInfo } = useFetch();

	return (
		<PageComponent>
			<Secondaryheader url={'/notes'} />
			<PageContainer>
				<StyledForm
					onSubmit={handleSubmit((formData, e) =>
						onSubmit(formData, e, setFetchInfo, currentUser, currentDate)
					)}
				>
					<InputContainer
						errors={errors}
						keyForm={'noteTitle'}
						label={'Title'}
						register={register}
						type={'text'}
					/>
					<Text
						text={`Date: ${new Date(currentDate).toLocaleDateString()}`}
						align={MEASUREMENTS.ALIGN.CENTER}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
					/>
					<TextareaComponent
						name={'noteText'}
						register={register}
						formValidation={FORM_VALIDATIONS.journalEntry}
						placeHolder={'Write your note here'}
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

const onSubmit = async (
	formData,
	e,
	setFetchInfo,
	currentUser,
	currentDate
) => {
	e.preventDefault();
	const { noteText, noteTitle } = formData;

	try {
		await setFetchInfo({
			url: NOTES_URLS.CREATE_NOTE + currentUser._id,
			options: {
				method: METHODS.POST,
				body: JSON.stringify({
					userId: currentUser._id,
					noteCreation: currentDate,
					noteText,
					noteTitle
				}),
				headers: HEADERS
			},
			navigateTo: `/notes`
		});
	} catch (error) {
		console.log(error);
	}
};

export default NewNote;
