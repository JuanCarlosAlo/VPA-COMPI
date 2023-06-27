import { useContext } from 'react';
import PageComponent from '../../components/page-component/PageComponent';
import Text from '../../components/text/Text';
import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import { TEXTS } from '../../constants/texts';
import { StyledWelcomeContainer } from './styles';
import { AuthContext } from '../../context/Auth.context';
import { Navigate } from 'react-router-dom';

const Welcome = () => {
	const { currentUser } = useContext(AuthContext);
	if (currentUser) return <Navigate to={'/home'} />;
	return (
		<PageComponent>
			<StyledWelcomeContainer>
				<Text
					color={`${COLORS.MAIN}`}
					text={`${TEXTS.WELCOME}`}
					fontSize={`${MEASUREMENTS.FONTS_SIZE.SUBTITLES.MOBILE}`}
				/>
				<p>COMPI</p>
			</StyledWelcomeContainer>
		</PageComponent>
	);
};

export default Welcome;
