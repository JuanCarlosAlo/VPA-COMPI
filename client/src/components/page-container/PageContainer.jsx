import { StyledPageContainer } from './styles';

const PageContainer = ({ children, scroll }) => {
	return <StyledPageContainer scroll={scroll}>{children}</StyledPageContainer>;
};

export default PageContainer;
