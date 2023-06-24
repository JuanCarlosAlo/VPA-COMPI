import { useContext } from 'react';
import PageComponent from '../../components/page-component/PageComponent';
import SocialLogin from '../../components/social-logIn/SocialLogin';
import { AuthContext } from '../../context/Auth.context';

import { useFetch } from '../../hooks/useFetch';
import { Navigate } from 'react-router-dom';

const Login = () => {
	const { currentUser } = useContext(AuthContext);

	const { setFetchInfo } = useFetch();

	if (currentUser) return <Navigate to={'/'} />;

	return (
		<PageComponent>
			<h2>Register</h2>
			<SocialLogin setFetchInfo={setFetchInfo} />
		</PageComponent>
	);
};

export default Login;
