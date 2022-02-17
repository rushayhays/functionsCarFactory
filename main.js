// a set of functions to immitate a car assembley line
function createChassis() {
    const newChassisObj = {};
    return newChassisObj;
}
function addWheels(obj) {
    obj["wheels"]="4";
    return obj;
}

function addEngine(obj) {
    obj["engine"] = "4.8L";
    return obj;
}

function addSteering(obj) {
    obj["steeringWheel"] = "tilting";
    return obj;
}

function addDriveTrain(obj) {
    obj["driveTrain"] = "two wheel drive";
    return obj;
}

const newCar = addDriveTrain(addSteering(addEngine(addWheels(createChassis()))));

console.log(newCar)

function addBody(obj) {
    obj["body"] = "fever";
    return obj;
}

addBody(newCar);
console.log(newCar);