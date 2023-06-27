import PageComponent from '../../components/page-component/PageComponent';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import PrimaryButton from '../../components/primary-button/PrimaryButton';
import { COLORS } from '../../constants/colors';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';

const Profile = () => {
	return (
		<PageComponent>
			<Secondaryheader url={'/home'} />
			<h2>Profile</h2>
			<PrimaryButton
				align={'center'}
				color={COLORS.MAIN}
				setState={signOut}
				setValue={auth}
				text={'Logout'}
				url={'/'}
			/>
		</PageComponent>
	);
};

export default Profile;
