//Question 1: Value Detective · 10 marks

const describeValue = value => {
    const type = typeof value;
    // check truthy or falsy value
    const representation = value ? 'truthy' : 'falsy';
    return `${type} | ${representation}`;
}


