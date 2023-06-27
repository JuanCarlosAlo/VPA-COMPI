import PageComponent from '../../components/page-component/PageComponent';
import { TITLES } from '../../constants/titles';
import { v4 } from 'uuid';
import { StyledButtonsContainer, StyledMainButton } from './styles';
import { useNavigate } from 'react-router-dom';
const Home = () => {
	const navigate = useNavigate();
	return (
		<PageComponent>
			<StyledButtonsContainer>
				{TITLES.MAIN.map(title => (
					<StyledMainButton onClick={() => navigate(title.URL)} key={v4()}>
						{title.TEXT}
					</StyledMainButton>
				))}
			</StyledButtonsContainer>
		</PageComponent>
	);
};

export default Home;
