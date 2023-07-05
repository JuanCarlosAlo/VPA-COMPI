import { useContext } from 'react';
import PageComponent from '../../components/page-component/PageComponent';
import PageContainer from '../../components/page-container/PageContainer';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import { AuthContext } from '../../context/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import { TASKS_URLS } from '../../constants/urls';

import TaskContainer from '../../components/task-container/TaskContainer';

const Tasks = () => {
	const { currentUser } = useContext(AuthContext);
	const { setFetchInfo, data, loading } = useFetch({
		url: TASKS_URLS.ALL_TASKS + currentUser._id
	});

	if (loading) return <h2>Loading</h2>;

	return (
		<PageComponent>
			<Secondaryheader
				url={'/home'}
				secondButton={true}
				secondText={'+ New Task'}
				secondUrl={'/new-task'}
			/>
			<PageContainer>
				{!data || data.tasks.length === 0 ? (
					<p>There is not tasks yet</p>
				) : (
					<>
						<TaskContainer tasks={data.tasks} setFetchInfo={setFetchInfo} />
					</>
				)}
			</PageContainer>
		</PageComponent>
	);
};

export default Tasks;
