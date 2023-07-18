import PageComponent from '../../components/page-component/PageComponent';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import PrimaryButton from '../../components/primary-button/PrimaryButton';
import { COLORS } from '../../constants/colors';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import { MEASUREMENTS } from '../../constants/measurements';

import { AuthContext } from '../../context/Auth.context';
import PageContainer from '../../components/page-container/PageContainer';
import Text from '../../components/text/Text';
import { PROFILE_INFO } from '../../constants/profileInfo';
import { v4 } from 'uuid';

import Modal from '../../components/modal/Modal';
import { useContext, useState } from 'react';
import DeleteAccountModal from '../../components/delete-account-modal/DeleteAccountModal';
import { USERS_URLS } from '../../constants/urls';
import { useFetch } from '../../hooks/useFetch';
import { StyledProfileInfo } from './styles';

const Profile = () => {
	const { currentUser } = useContext(AuthContext);
	const [content, setContent] = useState(null);
	const { setFetchInfo } = useFetch();
	return (
		<>
			<PageComponent>
				<Secondaryheader url={'/home'} />
				<PageContainer>
					<StyledProfileInfo>
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
								fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
								text={text.text + ' ' + currentUser[text.key]}
							/>
						))}
					</StyledProfileInfo>
					<PrimaryButton
						align={MEASUREMENTS.ALIGN.CENTER}
						color={COLORS.MAIN}
						setState={signOut}
						setValue={auth}
						text={'Logout'}
						url={'/'}
					/>
					<PrimaryButton
						align={MEASUREMENTS.ALIGN.CENTER}
						color={COLORS.MAIN}
						setState={setContent}
						setValue={
							<DeleteAccountModal
								currentUser={currentUser}
								fetchUrl={USERS_URLS.DELETE_USER + currentUser._id}
								setFetchInfo={setFetchInfo}
								setContent={setContent}
								navigateTo={'/'}
							/>
						}
						text={'Delete Account'}
					/>
				</PageContainer>
			</PageComponent>
			<Modal>{content}</Modal>
		</>
	);
};

export default Profile;
