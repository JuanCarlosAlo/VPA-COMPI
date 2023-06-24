import { Link } from 'react-router-dom';
import Menu from '../menu/Menu';
import { StyledHeader } from './styles';

const Header = () => {
	return (
		<StyledHeader>
			<Link to={'/'}>LOGO</Link>
			<Menu />
		</StyledHeader>
	);
};

export default Header;
