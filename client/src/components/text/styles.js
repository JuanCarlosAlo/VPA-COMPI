import styled from 'styled-components';

const StyledText = styled.p`
	color: ${({ color }) => color};
	font-size: ${({ fontSize }) => fontSize};
`;

export { StyledText };
