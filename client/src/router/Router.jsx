import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Welcome from '../pages/Welcome/Welcome';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';

const Router = () => {
	return (
		<Routes>
			<Route>
				<Route path='/' element={<Layout />}>
					<Route index element={<Welcome />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default Router;
