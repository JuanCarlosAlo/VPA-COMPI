import PageComponent from '../../components/page-component/PageComponent';
import Text from '../../components/text/Text';
import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import { TEXTS } from '../../constants/texts';
import { StyledWelcomeContainer } from './styles';

const Welcome = () => {
	return (
		<PageComponent>
			<StyledWelcomeContainer>
				<Text
					color={`${COLORS.WHITE}`}
					text={`${TEXTS.WELCOME}`}
					fontSize={`${MEASUREMENTS.FONTS_SIZE.SUBTITLES.MOBILE}`}
				/>
				<p>COMPI</p>
			</StyledWelcomeContainer>
		</PageComponent>
	);
};

export default Welcome;
