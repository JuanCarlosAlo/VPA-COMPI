import { useContext } from 'react';
import PageComponent from '../../components/page-component/PageComponent';
import SocialLogin from '../../components/social-logIn/SocialLogin';
import { AuthContext } from '../../context/Auth.context';
import { USERS_URLS } from '../../constants/urls';
import { useFetch } from '../../hooks/useFetch';
import { Navigate } from 'react-router-dom';

const Register = () => {
	const { currentUser } = useContext(AuthContext);

	const { loading, error, setFetchInfo } = useFetch({
		url: USERS_URLS.ALL_USERS
	});

	if (currentUser) return <Navigate to={'/'} />;
	if (loading) return <h2>Loading</h2>;
	if (error) return <h2>Error</h2>;
	return (
		<PageComponent>
			<h2>Register</h2>
			<SocialLogin setFetchInfo={setFetchInfo} />
		</PageComponent>
	);
};

export default Register;
