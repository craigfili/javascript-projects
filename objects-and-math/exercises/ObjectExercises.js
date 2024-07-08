let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function(){
      return Math.round(Math.random()*10);
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function(){
      return Math.round(Math.random()*10);
   }
};


// After you have created the other object literals, add the astronautID property to each one.
let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function(){
      return Math.round(Math.random()*10);
   }
};
let superBeagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function(){
      return Math.round(Math.random()*10);
   }
};
let superTardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: .0000000001,
   age: 1,
   astronautID: 5,
   move: function(){
      return Math.round(Math.random()*10);
   }
};
// Add a move method to each animal object

// Create an array to hold the animal objects.
let animals = [superChimpOne, salamander, superChimpTwo, superBeagle, superTardigrade];
// Print out the relevant information about each animal.
function crewReports (animal){
      console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} years old
and ${animal.age} kilograms. Their ID is ${animal.astronautID}.`
      )
}

for (i = 0; i < animals.length; i++){
   crewReports(animals[i]);
}
// Start an animal race!
function fitnessTest(animals){
   let raceResults = [], numSteps, turns;
   for (i = 0; i < animals.length; i++){
      numSteps = 0;
      turns = 0;
      while(numSteps<20){
         numSteps = numSteps + animals[i].move();
         turns++;
      }
      raceResults.push(`${animals[i].name} took ${turns} turns to take 20 steps.`);
   }
   return raceResults;
}

let raceResults = fitnessTest(animals);
for (i = 0; i < raceResults.length; i++){
   console.log(raceResults[i]);
}
