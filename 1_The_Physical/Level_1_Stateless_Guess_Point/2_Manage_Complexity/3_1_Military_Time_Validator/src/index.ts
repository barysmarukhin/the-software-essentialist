function isTimeValid(time: string) {
    const [hours, minutes] = time.split(':').map(Number);

    // Check if hours and minutes are valid
    if (isNaN(hours) || isNaN(minutes)) return false;
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) return false;

    return true;
}
export const isTimeRangeValid = (timeRange: string) => {
    const timeList = timeRange.split('-').map(time => time.trim());

    // Check if the timeList contains exactly "start - end" items
    if (timeList.length !== 2) return false;

    // Validate the individual times
    const [start, end] = timeList;
    if (!isTimeValid(start) || !isTimeValid(end)) return false;

    // Validate time interval
    if (!isTimeGreaterOrEqual(end, start)) return false;

    return true;
}

function isTimeGreaterOrEqual(startTime: string, endTime: string) {
    const [startHours, startMinutes] = startTime.split(':').map(Number);
    const [endHours, endMinutes] = endTime.split(':').map(Number);

    if (startHours > endHours) return true;
    if (startHours === endHours) return startMinutes >= endMinutes;

    return false;
}