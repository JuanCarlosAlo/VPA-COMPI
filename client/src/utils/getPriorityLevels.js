export const getPriorityLevel = (priority) => {
    if (priority === 1) { return 'Low' }
    if (priority === 2) { return 'Medium' }
    if (priority === 3) { return 'High' }
    if (priority === 4) { return 'Very High' }
}