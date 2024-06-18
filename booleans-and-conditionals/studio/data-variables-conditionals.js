// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMasskg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMasskg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -250;
let mimimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7){
    preparedForLiftOff = false;
    console.log("There are too many astronauts on board.");
}
// add logic below to verify all astronauts are ready
if (astronautStatus != "ready"){
    preparedForLiftOff = false;
    console.log("Astronauts reporting not ready.");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (!totalMassKg > maximumMassLimit){
    preparedForLiftOff = false;
    console.log("Load is too heavy.");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius < mimimumFuelTemp || fuelTempCelsius > maximumFuelTemp){
    preparedForLiftOff = false;
    console.log("Fuel temperature out of range.");
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel !== "100%"){
    preparedForLiftOff = false;
    console.log("It is necessary to refuel.");
}
// add logic below to verify the weather status is clear
if (weatherStatus !== "clear"){
    preparedForLiftOff = false;
    console.log("Weather is not suitable.")
}
// Verify shuttle launch can proceed based on above conditions
if (!preparedForLiftOff){
    console.log("Mission aborted. Do not proceed!");
} else {
    console.log(`
    All system are a go!  Initiating space shuttle launch sequence.
    ---------------------------------------------------------------
    Date: ${date}
    Time: ${time}
    Astonaut Count: ${astronautCount}
    Crew Mass: ${crewMassKg} kg
    Fuel Mass: ${fuelMasskg} kg
    Shuttle Mass: ${shuttleMassKg} kg
    Total Mass: ${totalMassKg} kg
    Fuel Temperature: ${fuelTempCelsius} °C
    Weather Status: ${weatherStatus}
    ---------------------------------------------------------------
    Have a safe trip astronauts!
    `);
}