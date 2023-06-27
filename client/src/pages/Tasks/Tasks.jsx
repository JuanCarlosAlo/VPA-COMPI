import PageComponent from '../../components/page-component/PageComponent';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';

const Tasks = () => {
	return (
		<PageComponent>
			<Secondaryheader url={'/home'} />
			Tasks
		</PageComponent>
	);
};

export default Tasks;
