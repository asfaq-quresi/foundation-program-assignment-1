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


//Question 3: Username Gatekeeper
const validateUsername = (username) => {
  if (username.length < 4) {
    return "Too Short";
  }
  if (username.includes(" ")) {
    return "No Space Allowed";
  }
  if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  }
  return "Available";
}

//Question 4: Dhaka CNG Fare Meter
const getCngFare = (distance, isNight = false, waitingMinutes = 0) => {
  let fare = 50;
  if (distance > 2) {
    fare += (distance - 2) * 15;
  }
  fare += waitingMinutes * 2;

  if (isNight) {
    fare *= 1.2;
  }
  return fare;
};