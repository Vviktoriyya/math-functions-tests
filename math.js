function timeToMinutes(timeStr) {
    const [hoursStr, minutesStr] = timeStr.split(':');
    const hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);

    if (
        isNaN(hours) || isNaN(minutes) ||
        hours < 0 || hours > 23 ||
        minutes < 0 || minutes > 59
    ) {
        throw new Error('Неправильний формат часу!');
    }

    return hours * 60 + minutes;
}

module.exports = { timeToMinutes };