import Menu from '../menu/Menu';
import { StyledHeader, StyledHeaderContainer } from './styles';
import Logo from '../logo/logo';

const Header = () => {
	return (
		<StyledHeader>
			<StyledHeaderContainer>
				<Logo fontSize={'1rem'} />
				<Menu />
			</StyledHeaderContainer>
		</StyledHeader>
	);
};

export default Header;
