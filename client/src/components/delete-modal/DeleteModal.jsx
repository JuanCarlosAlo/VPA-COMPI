import { useContext } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { AuthContext } from '../../context/Auth.context';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';
import { StyledOptionsContainer } from './styles';

const DeleteModal = ({ title, setContent, fetchUrl, navigateTo, id }) => {
	const { currentUser } = useContext(AuthContext);
	const { setFetchInfo } = useFetch();
	return (
		<>
			<p>Are you sure tou want to delete {title}?</p>
			<StyledOptionsContainer>
				<p onClick={() => setContent(null)}>no</p>
				<p
					onClick={() =>
						handleClick(setFetchInfo, fetchUrl, currentUser, navigateTo, id)
					}
				>
					yes
				</p>
			</StyledOptionsContainer>
		</>
	);
};

const handleClick = async (
	setFetchInfo,
	fetchUrl,
	currentUser,
	navigateTo,
	id
) => {
	try {
		await setFetchInfo({
			url: fetchUrl + currentUser._id,
			options: {
				method: METHODS.DELETE,
				body: JSON.stringify({ id }),
				headers: HEADERS
			},
			navigateTo: navigateTo || undefined
		});
	} catch (error) {
		console.log(error);
	}
};

export default DeleteModal;
