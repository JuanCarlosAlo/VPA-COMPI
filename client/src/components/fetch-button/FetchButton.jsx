import { HEADERS } from '../../constants/headers';
import { StyledButton, StyledButtonContainer } from './styles';

const FetchButton = ({
	text,
	setState,
	setValue,
	url,
	color,
	align,
	bgcolor,
	setFetchInfo,
	navigateTo,
	method,
	body
}) => {
	return (
		<StyledButtonContainer align={align}>
			<StyledButton
				color={color}
				bgcolor={bgcolor}
				onClick={() => {
					handleClick(
						setFetchInfo,
						url,
						navigateTo,
						method,
						body,
						setState,
						setValue
					);
				}}
			>
				{text}
			</StyledButton>
		</StyledButtonContainer>
	);
};

const handleClick = async (
	setFetchInfo,
	url,
	navigateTo,
	method,
	body,
	setState,
	setValue
) => {
	try {
		await setFetchInfo({
			url,
			options: {
				method,
				body: JSON.stringify(body),
				headers: HEADERS
			},
			navigateTo: navigateTo || undefined
		});
	} catch (error) {
		console.log(error);
	}
	if (setState) setState(setValue);
};

export default FetchButton;
