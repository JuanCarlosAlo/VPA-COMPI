import {
	GoogleAuthProvider,
	deleteUser,
	getAuth,
	reauthenticateWithCredential,
	signInWithPopup
} from 'firebase/auth';

import { StyledButton, StyledButtonIcon } from './styles';
import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';

const SocialDeleteAccount = ({
	setFetchInfo,
	currentUser,
	fetchUrl,
	navigateTo
}) => {
	return (
		<StyledButton
			onClick={() =>
				DeleteWithGoogle(setFetchInfo, currentUser, fetchUrl, navigateTo)
			}
		>
			Continue in with Google
			<StyledButtonIcon src={'/images/google-tile.svg'} alt='Google icon' />
		</StyledButton>
	);
};

const DeleteWithGoogle = async (
	setFetchInfo,
	currentUser,
	fetchUrl,
	navigateTo
) => {
	const provider = new GoogleAuthProvider();
	const auth = getAuth();
	const user = auth.currentUser;

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
		const result = await signInWithPopup(auth, provider);
		const credential = GoogleAuthProvider.credentialFromResult(result);

		await reauthenticateWithCredential(user, credential);
		await deleteUser(user);

		// User deleted.
	} catch (error) {
		console.log(error);
		// An error ocurred
		// ...
	}
};

export default SocialDeleteAccount;
