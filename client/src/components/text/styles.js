import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';

const StyledText = styled.p`
	color: ${({ color }) => color};
	text-align: ${({ align }) => {
		if (align) {
			return align;
		} else {
			return 'left';
		}
	}};
	font-size: ${({ fontSize }) => MEASUREMENTS.FONTS_SIZE[fontSize].MOBILE};
	@media screen and (min-width: 768px) {
		font-size: ${({ fontSize }) => MEASUREMENTS.FONTS_SIZE[fontSize].TABLET};
	}
`;

export { StyledText };
