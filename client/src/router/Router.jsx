import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Welcome from '../pages/Welcome/Welcome';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import ProtectedRoute from './ProtectedRoute';
import Profile from '../pages/Profile/Profile';
import Journal from '../pages/Journal/Journal';
import Tasks from '../pages/Tasks/Tasks';
import Chat from '../pages/Chat/Chat';
import NewJournalEntry from '../pages/New-Journal-Emtry/NewJournalEntry';

const Router = () => {
	return (
		<Routes>
			<Route>
				<Route path='/' element={<Layout />}>
					<Route index element={<Welcome />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route
						path='/home'
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/profile'
						element={
							<ProtectedRoute>
								<Profile />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/journal'
						element={
							<ProtectedRoute>
								<Journal />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/new-entry'
						element={
							<ProtectedRoute>
								<NewJournalEntry />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/tasks'
						element={
							<ProtectedRoute>
								<Tasks />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/chat'
						element={
							<ProtectedRoute>
								<Chat />
							</ProtectedRoute>
						}
					/>
				</Route>
			</Route>
		</Routes>
	);
};

export default Router;
