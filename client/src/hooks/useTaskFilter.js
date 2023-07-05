import { useState } from 'react';
import { getDateToPrint } from '../utils/getTimeToPrint';

export const DEFAULT_FILTER = {
	taskCompletion: false,
	date: null,

}


export const useFilterTasks = data => {

	const [filter, setFilter] = useState({
		taskCompletion: false,
		date: null,

	});
	const tasks = data;

	const sortTasksByDateAndCompletion = () => {
		if (!tasks) return [];
		const sortedTasks = tasks.sort((a, b) => a.taskDate - b.taskDate);
		const incompleteTasks = sortedTasks.filter(task => !task.taskCompletion);
		const completeTasks = sortedTasks.filter(task => task.taskCompletion);

		return [...incompleteTasks, ...completeTasks];
	};
	let filteredTasks = sortTasksByDateAndCompletion(tasks)

	const taskDate = () => {
		if (filter.date) {
			return filteredTasks.filter(element => filter.date === getDateToPrint(element.taskDate));
		} else {
			return filteredTasks;
		}
	};

	// const sortFilter = () => {
	// 	if (filter.sort !== 0) {
	// 		return filteredTasks.sort((a, b) => {
	// 			if (a.name > b.name) return 1;
	// 			if (a.name < b.name) return -1;
	// 			return 0;
	// 		});
	// 	} else {
	// 		return filteredTasks;
	// 	}
	// };


	filteredTasks = taskDate(filter.active, filteredTasks);

	// filteredTasks = sortFilter(filter.sort, filteredTasks);

	return {
		filteredTasks,
		filter,
		setFilter
	};
};
