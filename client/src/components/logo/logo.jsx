import { StyledLogo } from './styles';

const Logo = ({ fontSize }) => {
	return (
		<StyledLogo fontSize={fontSize} to={'/'}>
			COMPI
		</StyledLogo>
	);
};

export default Logo;
