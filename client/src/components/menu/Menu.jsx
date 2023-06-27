import { Link } from 'react-router-dom';
import { StyledMenu } from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';

const Menu = () => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);
	if (loadingFirebase) return <p>Loading</p>;
	return (
		<>
			{currentUser ? (
				<nav>
					<StyledMenu>
						<Link to={'/profile'}>
							<li>{currentUser.userName}</li>
						</Link>
					</StyledMenu>
				</nav>
			) : (
				<nav>
					<StyledMenu>
						<Link to={'/register'}>
							<li>Register</li>
						</Link>
						<Link to={'/login'}>
							<li>Login</li>
						</Link>
					</StyledMenu>
				</nav>
			)}
		</>
	);
};

export default Menu;
