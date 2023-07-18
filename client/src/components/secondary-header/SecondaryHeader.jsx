import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import SecondaryButton from '../secondary-button/SecondaryButton';
import {
	StyledSecondaryHeader,
	StyledSecondaryHeaderContainer
} from './styles';

const Secondaryheader = ({
	url,
	secondButton,
	secondUrl,
	secondText,
	state
}) => {
	return (
		<StyledSecondaryHeader>
			<StyledSecondaryHeaderContainer>
				<SecondaryButton
					align={MEASUREMENTS.ALIGN.LEFT}
					color={COLORS.WHITE}
					url={url}
					text={'Back'}
					state={state}
					border={true}
				/>
				{secondButton && (
					<SecondaryButton
						align={MEASUREMENTS.ALIGN.RIGHT}
						color={COLORS.WHITE}
						url={secondUrl}
						text={secondText}
						state={state}
						border={true}
					/>
				)}
			</StyledSecondaryHeaderContainer>
		</StyledSecondaryHeader>
	);
};

export default Secondaryheader;
