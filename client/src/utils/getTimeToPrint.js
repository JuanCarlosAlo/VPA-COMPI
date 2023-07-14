export const getDateToPrint = (dateString) => {
    const dateObject = new Date(dateString);

    // Obtener la fecha
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');

    return `${month}/${day}/${year}`;
}

export const getTimeToPrint = (dateString) => {
    const dateObject = new Date(dateString);
    const hours = dateObject.getHours().toString().padStart(2, '0');
    const minutes = dateObject.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
};

