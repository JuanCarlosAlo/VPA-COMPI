import { COLORS } from '../../constants/colors';
import { FORM_VALIDATIONS } from '../../constants/formValidations';
import { MEASUREMENTS } from '../../constants/measurements';
import InputContainer from '../InputContainer/InputContainer';
import SocialDeleteAccount from '../SocialDeleteAccount/SocialDeleteAccount';
import Text from '../text/Text';
import Title from '../title/Title';
import { useForm } from 'react-hook-form';
import { StyledDeleteAccaountModal, StyledForm } from './styles';
import {
	EmailAuthProvider,
	deleteUser,
	getAuth,
	reauthenticateWithCredential
} from 'firebase/auth';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';
import PrimaryButton from '../primary-button/PrimaryButton';

const DeleteAccountModal = ({
	setFetchInfo,
	currentUser,
	fetchUrl,
	navigateTo,
	setContent
}) => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });
	return (
		<StyledDeleteAccaountModal>
			<Title
				align={MEASUREMENTS.ALIGN.CENTER}
				color={COLORS.MAIN}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
				text={'Delete Account'}
			/>
			<SocialDeleteAccount
				currentUser={currentUser}
				fetchUrl={fetchUrl}
				navigateTo={navigateTo}
				setFetchInfo={setFetchInfo}
			/>
			<StyledForm
				onSubmit={handleSubmit((formData, e) =>
					onSubmit(formData, e, setFetchInfo, currentUser, fetchUrl, navigateTo)
				)}
			>
				<InputContainer
					errors={errors}
					formValidation={FORM_VALIDATIONS.email}
					keyForm={'email'}
					label={'Email'}
					register={register}
					type={'text'}
				/>
				<InputContainer
					errors={errors}
					formValidation={FORM_VALIDATIONS.password}
					keyForm={'password'}
					label={'Password'}
					register={register}
					type={'password'}
				/>
				<Text
					align={MEASUREMENTS.ALIGN.CENTER}
					color={COLORS.MAIN}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
					text={`IMPORTANT NOTE:`}
				/>
				<Text
					align={MEASUREMENTS.ALIGN.CENTER}
					color={COLORS.MAIN}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
					text={`If you register your account with Google, click continue with Google to
				delete the account and data attached to this app if not use your email
				and password above.`}
				/>
				<PrimaryButton
					align={MEASUREMENTS.CENTER}
					color={COLORS.MAIN}
					text={'Delete Account'}
				/>
			</StyledForm>
		</StyledDeleteAccaountModal>
	);
};

const onSubmit = async (
	formData,
	e,
	setFetchInfo,
	currentUser,
	fetchUrl,
	navigateTo
) => {
	e.preventDefault();

	try {
		const auth = await getAuth();
		const user = await auth.currentUser;

		// Solicitar al usuario que vuelva a autenticarse antes de eliminar la cuenta

		const credential = EmailAuthProvider.credential(
			formData.email,
			formData.password
		);

		// Volver a autenticar al usuario
		await reauthenticateWithCredential(user, credential);

		// Eliminar la cuenta del usuario
		try {
			await setFetchInfo({
				url: fetchUrl,
				options: {
					method: METHODS.DELETE,
					body: JSON.stringify(),
					headers: HEADERS
				},
				navigateTo: navigateTo || undefined
			});
			await deleteUser(user);
		} catch (error) {
			console.log(error);
		}
	} catch (error) {}
};

export default DeleteAccountModal;
