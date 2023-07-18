const BASE = 'http://localhost:3000/';

export const USERS_URLS = {
	ALL_USERS: BASE + 'users/all-users',
	GET_USER_BY_ID: BASE + 'users/userById/',
	CREATE_USER: BASE + 'users/create-user',
	DELETE_USER: BASE + 'users/delete-user/'
};

export const JOURNAL_URLS = {
	ALL_ENTRIES: BASE + 'journal/all-entries/',
	CREATE_ENTRY: BASE + 'journal/new-entry/',
	EDIT_ENTRY: BASE + 'journal/edit-entry/',
	DELETE_ENTRY: BASE + 'journal/delete-entry/'
};

export const TASKS_URLS = {
	ALL_TASKS: BASE + 'tasks/all-tasks/',
	CREATE_TASK: BASE + 'tasks/new-task/',
	COMPLETE_TASK: BASE + 'tasks/complete-task/'
};

export const NOTES_URLS = {
	ALL_NOTES: BASE + 'notes/all-notes/',
	CREATE_NOTE: BASE + 'notes/new-note/',
	EDIT_NOTE: BASE + 'notes/edit-note/',
	DELETE_NOTE: BASE + 'notes/delete-note/'
};

export const CHAT_URLS = {
	ALL_CHATS: BASE + 'chats/all-chats/',
	CREATE_CHAT: BASE + 'chats/new-chat/',
	ADD_MESSAGE: BASE + 'chats/add-message/'
}