import { useContext } from 'react';
import PageComponent from '../../components/page-component/PageComponent';
import Text from '../../components/text/Text';
import { COLORS } from '../../constants/colors';

import { TEXTS } from '../../constants/texts';

import { AuthContext } from '../../context/Auth.context';
import { Navigate } from 'react-router-dom';
import { MEASUREMENTS } from '../../constants/measurements';
import PageContainer from '../../components/page-container/PageContainer';
import Logo from '../../components/logo/logo';
import PrimaryButton from '../../components/primary-button/PrimaryButton';
import { StyledTitleContainer } from './styles';

const Welcome = () => {
	const { currentUser } = useContext(AuthContext);
	if (currentUser) return <Navigate to={'/home'} />;
	return (
		<PageComponent>
			<PageContainer>
				<StyledTitleContainer>
					<Text
						color={COLORS.WHITE}
						text={TEXTS.WELCOME}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
						align={MEASUREMENTS.ALIGN.CENTER}
					/>
					<Logo fontSize={'3rem'} />
				</StyledTitleContainer>
				<PrimaryButton
					align={MEASUREMENTS.ALIGN.CENTER}
					color={COLORS.MAIN}
					url={'/register'}
					text={'Try it Now!'}
				/>
				<PrimaryButton
					align={MEASUREMENTS.ALIGN.CENTER}
					color={COLORS.MAIN}
					url={'/login'}
					text={'Sign in'}
				/>
			</PageContainer>
		</PageComponent>
	);
};

export default Welcome;
