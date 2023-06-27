import styled from 'styled-components';

const StyledText = styled.p`
	color: ${({ color }) => color};
	text-align: ${({ align }) => {
		if (align) {
			return align;
		} else {
			return 'left';
		}
	}};
	font-size: ${({ fontSize }) => fontSize};
`;

export { StyledText };
