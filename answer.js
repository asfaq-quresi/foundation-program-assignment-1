//Question 1: Value Detective

const describeValue = value => {
    const type = typeof value;
    // check truthy or falsy value
    const representation = value ? 'truthy' : 'falsy';
    return `${type} | ${representation}`;
}


//Question 2: Bangladesh Weekend Machine
const getDayType = day => {
    const fommattedDay = day.toLowerCase();
    switch (fommattedDay) {
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        default:
            return "Invalid Day";
    }
}