import { useContext } from 'react';
import PageComponent from '../../components/page-component/PageComponent';
import Text from '../../components/text/Text';
import { COLORS } from '../../constants/colors';

import { TEXTS } from '../../constants/texts';

import { AuthContext } from '../../context/Auth.context';
import { Navigate } from 'react-router-dom';
import { MEASUREMENTS } from '../../constants/measurements';
import PageContainer from '../../components/page-container/PageContainer';

const Welcome = () => {
	const { currentUser } = useContext(AuthContext);
	if (currentUser) return <Navigate to={'/home'} />;
	return (
		<PageComponent>
			<PageContainer>
				<Text
					color={COLORS.MAIN}
					text={TEXTS.WELCOME}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
					align={MEASUREMENTS.ALIGN.CENTER}
				/>
			</PageContainer>
		</PageComponent>
	);
};

export default Welcome;
