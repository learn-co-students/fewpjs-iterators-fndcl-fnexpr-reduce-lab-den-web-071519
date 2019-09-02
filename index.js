const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce((accumulator, currentVal) => {
    accumulator += currentVal
    return accumulator
}, 0)