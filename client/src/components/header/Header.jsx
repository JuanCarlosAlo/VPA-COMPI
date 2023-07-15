import { Link } from 'react-router-dom';
import Menu from '../menu/Menu';
import { StyledHeader, StyledHeaderContainer } from './styles';

const Header = () => {
	return (
		<StyledHeader>
			<StyledHeaderContainer>
				<Link to={'/'}>LOGO</Link>
				<Menu />
			</StyledHeaderContainer>
		</StyledHeader>
	);
};

export default Header;
