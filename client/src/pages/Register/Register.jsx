import { useContext } from 'react';
import PageComponent from '../../components/page-component/PageComponent';
import SocialLogin from '../../components/social-logIn/SocialLogin';
import { AuthContext } from '../../context/Auth.context';
import { USERS_URLS } from '../../constants/urls';
import { useFetch } from '../../hooks/useFetch';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FORM_VALIDATIONS } from '../../constants/formValidations';
import { METHODS } from '../../constants/methods';
import { getInitialUsername } from '../../utils/getInitialUsername';
import { auth } from '../../config/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { USER_DEFAULT_VALUES } from '../../constants/userDefaultValues';
import { HEADERS } from '../../constants/headers';
import PrimaryButton from '../../components/primary-button/PrimaryButton';
import Text from '../../components/text/Text';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
import { COLORS } from '../../constants/colors';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import InputContainer from '../../components/formContainer/InputContainer';
const Register = () => {
	const { currentUser } = useContext(AuthContext);

	const { data, loading, error, setFetchInfo } = useFetch({
		url: USERS_URLS.ALL_USERS
	});

	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });

	if (currentUser) return <Navigate to={'/'} />;
	if (loading) return <h2>Loading</h2>;
	if (error) return <h2>Error</h2>;
	return (
		<PageComponent>
			<Secondaryheader url={'/'} />
			<h2>Register</h2>
			<SocialLogin setFetchInfo={setFetchInfo} />
			<form
				onSubmit={handleSubmit((formData, e) =>
					onSubmit(formData, e, setFetchInfo, data)
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

				<PrimaryButton text={'Register'} color={COLORS.MAIN} />
			</form>

			<Text
				color={COLORS.SECONDARY}
				text={'Already have an account?'}
				align={'center'}
			/>
			<SecondaryButton
				url={'/login'}
				text={'Login here'}
				color={COLORS.SECONDARY}
				align={'center'}
			/>
		</PageComponent>
	);
};

const onSubmit = async (formData, e, setFetchInfo, data, setFirebaseErrors) => {
	e.preventDefault();
	const { email, password } = formData;
	const emailUsed = data.find(user => user.email === email);
	console.log(data);
	if (!emailUsed) {
		try {
			const userRegistered = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			const userName = getInitialUsername(email);
			await setFetchInfo({
				url: USERS_URLS.CREATE_USER,
				options: {
					method: METHODS.POST,
					body: JSON.stringify({
						_id: userRegistered.user.uid,
						userName,
						email,
						...USER_DEFAULT_VALUES
					}),
					headers: HEADERS
				},
				navigateTo: '/'
			});
		} catch (error) {
			console.log(error);
		}
	}
};

export default Register;
