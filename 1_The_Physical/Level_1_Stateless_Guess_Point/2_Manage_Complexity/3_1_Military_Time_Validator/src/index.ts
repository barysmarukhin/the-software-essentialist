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

    return true;
}