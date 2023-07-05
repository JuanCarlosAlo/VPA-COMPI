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
	margin-top:  ${({ fontSize }) => { return `calc(${MEASUREMENTS.FONTS_SIZE[fontSize].MOBILE} - 0.5rem)` }};
	margin-bottom:  ${({ fontSize }) => { return `calc(${MEASUREMENTS.FONTS_SIZE[fontSize].MOBILE} - 0.5rem)` }};
	@media screen and (min-width: 768px) {
		font-size: ${({ fontSize }) => MEASUREMENTS.FONTS_SIZE[fontSize].TABLET};
		margin-top:  ${({ fontSize }) => { return `calc(${MEASUREMENTS.FONTS_SIZE[fontSize].MOBILE} - 0.5rem)` }};
	margin-bottom:  ${({ fontSize }) => { return `calc(${MEASUREMENTS.FONTS_SIZE[fontSize].MOBILE} - 0.5rem)` }};
	}
`;

export { StyledText };
