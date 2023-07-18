import { Navigate, useLocation } from 'react-router-dom';
import PageComponent from '../../components/page-component/PageComponent';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import PageContainer from '../../components/page-container/PageContainer';
import InputContainer from '../../components/InputContainer/InputContainer';
import { JOURNAL_URLS } from '../../constants/urls';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth.context';
import { useForm } from 'react-hook-form';
import { useFetch } from '../../hooks/useFetch';
import { MEASUREMENTS } from '../../constants/measurements';
import { FORM_VALIDATIONS } from '../../constants/formValidations';
import { COLORS } from '../../constants/colors';
import { StyledForm } from './styles';

import AddImageContainer from '../../components/add-image-container/AddImageContainer';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
import TextareaComponent from '../../components/textarea-component/TextareaComponent';

const EditJournalEntry = () => {
	const { state } = useLocation();
	const { currentUser } = useContext(AuthContext);

	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });
	const [imgs, setImgs] = useState(state.journalEntryImgs);
	const { setFetchInfo } = useFetch();
	if (!state) return <Navigate to={'/journal'} />;
	return (
		<PageComponent>
			<Secondaryheader url={'/journal'} />
			<PageContainer>
				<AddImageContainer
					currentUser={currentUser}
					imgs={imgs}
					setImgs={setImgs}
				/>
				<StyledForm
					onSubmit={handleSubmit((formData, e) =>
						onSubmit(formData, e, setFetchInfo, currentUser, state, imgs)
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
						keyForm={'journalEntryTitle'}
						register={register}
						type={'text'}
						defaultValue={state.journalEntryTitle}
					/>

					<TextareaComponent
						name={'journalEntryText'}
						defaultValue={state.journalEntryText}
						formValidation={FORM_VALIDATIONS.journalEntry}
						placeHolder={'Write your entry here'}
						register={register}
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
	state,
	imgs
) => {
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
					journalEntryImgs: imgs
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
