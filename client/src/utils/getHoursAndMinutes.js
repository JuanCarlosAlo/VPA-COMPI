export const getHoursAndMinutes = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Formatear las horas y los minutos como un string
    const hourString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    return hourString

}