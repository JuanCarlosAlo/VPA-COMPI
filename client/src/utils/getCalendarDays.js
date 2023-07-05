export const getCalendarDays = (currentDate) => {
    const daysArray = [];
    for (let i = 0; i < 30; i++) {
        const day = currentDate.getDate() + i;
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        const dayOfWeek = date.toLocaleString('default', { weekday: 'long' });
        const dayNumber = date.getDate();
        const monthNumber = date.getMonth() + 1;
        const monthName = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();
        const dateString = `${monthNumber.toString().padStart(2, '0')}/${dayNumber.toString().padStart(2, '0')}/${year}`;

        daysArray.push({ dayOfWeek, dayNumber, monthNumber, monthName, year, dateString });
    }
    return daysArray;
};
