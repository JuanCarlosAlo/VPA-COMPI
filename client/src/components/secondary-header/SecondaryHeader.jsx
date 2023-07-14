import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import SecondaryButton from '../secondary-button/SecondaryButton';
import { StyledSecondaryHeader } from './styles';

const Secondaryheader = ({
	url,
	secondButton,
	secondUrl,
	secondText,
	state
}) => {
	return (
		<StyledSecondaryHeader>
			<SecondaryButton
				align={MEASUREMENTS.ALIGN.LEFT}
				color={COLORS.MAIN}
				url={url}
				text={'Back'}
				state={state}
			/>
			{secondButton && (
				<SecondaryButton
					align={MEASUREMENTS.ALIGN.RIGHT}
					color={COLORS.MAIN}
					url={secondUrl}
					text={secondText}
					state={state}
				/>
			)}
		</StyledSecondaryHeader>
	);
};

export default Secondaryheader;
