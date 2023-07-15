import PageComponent from '../../components/page-component/PageComponent';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import PrimaryButton from '../../components/primary-button/PrimaryButton';
import { COLORS } from '../../constants/colors';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import { MEASUREMENTS } from '../../constants/measurements';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';
import PageContainer from '../../components/page-container/PageContainer';
import Text from '../../components/text/Text';
import { PROFILE_INFO } from '../../constants/profileInfo';
import { v4 } from 'uuid';

const Profile = () => {
	const { currentUser } = useContext(AuthContext);
	return (
		<PageComponent>
			<Secondaryheader url={'/home'} />
			<PageContainer>
				<Text
					align={MEASUREMENTS.ALIGN.CENTER}
					color={COLORS.MAIN}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
					text={'Profile'}
				/>
				{PROFILE_INFO.map(text => (
					<Text
						key={v4()}
						align={MEASUREMENTS.ALIGN.LEFT}
						color={COLORS.MAIN}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
						text={text.text + ' ' + currentUser[text.key]}
					/>
				))}
				<PrimaryButton
					align={MEASUREMENTS.ALIGN.CENTER}
					color={COLORS.MAIN}
					setState={signOut}
					setValue={auth}
					text={'Logout'}
					url={'/'}
				/>
			</PageContainer>
		</PageComponent>
	);
};

export default Profile;
