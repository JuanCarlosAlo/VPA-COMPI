import { useContext } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { AuthContext } from '../../context/Auth.context';
import { METHODS } from '../../constants/methods';
import { StyledOptionsContainer } from './styles';
import Text from '../text/Text';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';
import SecondaryButton from '../secondary-button/SecondaryButton';
import FetchButton from '../fetch-button/FetchButton';

const DeleteModal = ({ title, setContent, fetchUrl, navigateTo, id }) => {
	const { currentUser } = useContext(AuthContext);
	const { setFetchInfo } = useFetch();
	return (
		<>
			<Text
				align={MEASUREMENTS.ALIGN.CENTER}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
				text={`Are you sure tou want to delete ${title}?`}
				color={COLORS.MAIN}
			/>
			<StyledOptionsContainer>
				<SecondaryButton
					setState={setContent}
					setValue={null}
					text={'No'}
					align={MEASUREMENTS.ALIGN.LEFT}
					color={COLORS.MAIN}
					border={true}
				/>
				<FetchButton
					align={MEASUREMENTS.ALIGN.RIGHT}
					color={COLORS.MAIN}
					body={{ id }}
					method={METHODS.DELETE}
					navigateTo={navigateTo}
					setFetchInfo={setFetchInfo}
					url={fetchUrl + currentUser._id}
					text={'Yes'}
				/>
			</StyledOptionsContainer>
		</>
	);
};

export default DeleteModal;
