const BASE = 'http://localhost:3000/';

export const USERS_URLS = {
	ALL_USERS: BASE + 'users/all-users',
	GET_USER_BY_ID: BASE + 'users/userById/',
	CREATE_USER: BASE + 'users/create-user'
};

export const JOURNAL_URLS = {
	ALL_ENTRIES: BASE + 'journal/all-entries/',
	CREATE_ENTRY: BASE + 'journal/new-entry/',
	EDIT_ENTRY: BASE + 'journal/edit-entry/'
};

export const TASKS_URLS = {
	ALL_TASKS: BASE + 'tasks/all-tasks/',

};