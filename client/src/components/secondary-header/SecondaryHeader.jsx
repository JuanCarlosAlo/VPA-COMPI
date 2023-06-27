import { COLORS } from '../../constants/colors';
import SecondaryButton from '../secondary-button/SecondaryButton';
import { SecondaryHeader } from './styles';

const Secondaryheader = ({ url, secondButton, secondUrl, secondText }) => {
	return (
		<SecondaryHeader>
			<SecondaryButton
				align={'left'}
				color={COLORS.MAIN}
				url={url}
				text={'Back'}
			/>
			{secondButton && (
				<SecondaryButton
					align={'right'}
					color={COLORS.MAIN}
					url={secondUrl}
					text={secondText}
				/>
			)}
		</SecondaryHeader>
	);
};

export default Secondaryheader;
