import { useContext } from 'react';
import PageComponent from '../../components/page-component/PageComponent';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import { AuthContext } from '../../context/Auth.context';
import PageContainer from '../../components/page-container/PageContainer';
import { useForm } from 'react-hook-form';
import { useFetch } from '../../hooks/useFetch';
import { FORM_VALIDATIONS } from '../../constants/formValidations';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';
import { JOURNAL_URLS } from '../../constants/urls';

const NewJournalEntry = () => {
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
			<Secondaryheader url={'/journal'} />
			<PageContainer>
				<form
					onSubmit={handleSubmit((formData, e) =>
						onSubmit(formData, e, setFetchInfo, currentUser, currentDate)
					)}
				>
					<div>
						<label htmlFor='journalEntryTitle'>Title</label>
						<input
							type='text'
							name='journalEntryTitle'
							{...register('journalEntryTitle')}
						/>
					</div>
					<p>{new Date(currentDate).toLocaleDateString()}</p>
					<div>
						<input
							type='textbox'
							name='journalEntryText'
							{...register('journalEntryText', FORM_VALIDATIONS.journalEntry)}
						/>
						<p>{errors?.text?.message}</p>
					</div>
					<button>Accept</button>
				</form>
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
	const { journalEntryTitle, journalEntryText } = formData;
	const defaultTitle = 'Entry 0';
	try {
		await setFetchInfo({
			url: JOURNAL_URLS.CREATE_ENTRY + currentUser._id,
			options: {
				method: METHODS.POST,
				body: JSON.stringify({
					userId: currentUser._id,
					journalEntryTitle: !journalEntryTitle
						? defaultTitle
						: journalEntryTitle,
					journalEntryCreation: currentDate,
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

export default NewJournalEntry;
