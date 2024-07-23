//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore){
        this.scores.push(newScore);
    }
    average(){
        let sumOfScores = 0;
        for (let i = 0; i < this.scores.length; i++){
            sumOfScores += this.scores[i];
        }
        return (sumOfScores/ this.scores.length).toFixed(1);
    }
    status(){
        let average = this.average();
        if (average >= 90)
            return "Accepted";
        else if (average >= 80)
            return "Reserve";
        else if (average >= 70)
            return "Probationary";
        else 
            return "Rejected";
    }
}

let candidate1 = new CrewCandidate ("Bubba Bear", 135, [88, 85, 90]);
let candidate2 = new CrewCandidate ("Mary Maltese", 1.5, [93, 88, 97]);
let candidate3 = new CrewCandidate ("Glad Gator", 225, [75, 78, 62]);

console.log(candidate1);
console.log(candidate2);
console.log(candidate3);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

candidate1.addScore(83);
console.log(candidate1.scores);
console.log(candidate2.average());

console.log(`${candidate1.name} earned an average test score of ${candidate1.average()}% and has a status of ${candidate1.status()}.
${candidate2.name} earned an average test score of ${candidate2.average()}% and has a status of ${candidate2.status()}.
${candidate3.name} earned an average test score of ${candidate3.average()}% and has a status of ${candidate3.status()}.
`)

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

while (candidate3.status() !== "Reserve"){
    candidate3.addScore(100);
};
console.log(`It took ${candidate3.scores.length} tests to reach Reserve status.
`
);
while (candidate3.status() !== "Accepted"){
    candidate3.addScore(100);
};

console.log(`It took ${candidate3.scores.length} tests to reach Accepted status.
`
);