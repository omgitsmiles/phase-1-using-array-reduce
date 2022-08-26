const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// const totalBatteries = batteryBatches.reduce((acc, int) => acc + int, 0)

//in batterybatches array, use reduce method to get sum of all batterys into single value
const totalBatteries = batteryBatches.reduce((acc, currVal) => acc + currVal)