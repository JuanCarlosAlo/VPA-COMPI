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
import NewJournalEntry from '../pages/New-Journal-Entry/NewJournalEntry';
import JournalEntry from '../pages/Journal-Entry/JournalEntry';
import EditJournalEntry from '../pages/Edit-Journal-Entry/EditJournalEntry';
import NewTask from '../pages/New-Task/NewTask';
import NewChat from '../pages/New-Chat/NewChat';
import Chatroom from '../pages/Chatroom/Chatroom';
import Notes from '../pages/Notes/Notes';
import NewNote from '../pages/New-Note/NewNote';
import Note from '../pages/Note/Note';
import EditNote from '../pages/Edit-Note/EditNote';

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
						path='/journal-entry'
						element={
							<ProtectedRoute>
								<JournalEntry />
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
						path='/edit-entry'
						element={
							<ProtectedRoute>
								<EditJournalEntry />
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
						path='/new-task'
						element={
							<ProtectedRoute>
								<NewTask />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/notes'
						element={
							<ProtectedRoute>
								<Notes />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/new-note'
						element={
							<ProtectedRoute>
								<NewNote />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/note'
						element={
							<ProtectedRoute>
								<Note />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/edit-note'
						element={
							<ProtectedRoute>
								<EditNote />
							</ProtectedRoute>
						}
					/>
					{/* <Route
						path='/chat'
						element={
							<ProtectedRoute>
								<Chat />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/new-chat'
						element={
							<ProtectedRoute>
								<NewChat />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/chatroom/:id'
						element={
							<ProtectedRoute>
								<Chatroom />
							</ProtectedRoute>
						}
					/> */}
				</Route>
			</Route>
		</Routes>
	);
};

export default Router;
