export const getDateTime = (dateString, timeString) => {
    const dateObject = new Date(dateString);
    const [hours, minutes] = timeString.split(':');
    dateObject.setHours(hours);
    dateObject.setMinutes(minutes);
    dateObject.setSeconds(0);
    return dateObject;
};