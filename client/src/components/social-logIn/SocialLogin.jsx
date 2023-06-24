import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { StyledButton, StyledButtonIcon } from './styles';
import { USERS_URLS } from '../../constants/urls';
import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';
import { getInitialUsername } from '../../utils/getInitialUsername';
import { USER_DEFAULT_VALUES } from '../../constants/userDefaultValues';

const SocialLogin = ({ setFetchInfo }) => {
	return (
		<StyledButton onClick={() => registerWithGoogle(setFetchInfo)}>
			Continue in with Google
			<StyledButtonIcon src={'/images/google-tile.svg'} alt='Google icon' />
		</StyledButton>
	);
};

const registerWithGoogle = async setFetchInfo => {
	const provider = new GoogleAuthProvider();

	try {
		const result = await signInWithPopup(auth, provider);
		const credential = GoogleAuthProvider.credentialFromResult(result);
		const userName = getInitialUsername(result.user.email);
		console.log(credential);
		setFetchInfo({
			url: USERS_URLS.CREATE_USER,
			options: {
				method: METHODS.POST,
				body: JSON.stringify({
					_id: result.user.uid,
					userName,
					email: result.user.email,
					...USER_DEFAULT_VALUES
				}),
				headers: HEADERS
			},
			navigateTo: '/'
		});
	} catch (error) {
		console.log(error);
	}
};

export default SocialLogin;
