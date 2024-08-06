// Write your JavaScript code here.

// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    
    let rocket = document.getElementById("rocket");
    rocket.style.position =  "absolute";
    rocket.style.bottom = "0px";
    rocket.style.left = "270px";

    let status = document.getElementById("flightStatus");
    let background = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    const takeOff = document.getElementById("takeoff");

    takeOff.addEventListener('click', event =>{
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (response){
        status.innerHTML = "Shuttle in flight.";
        background.style.backgroundColor= "blue";
        shuttleHeight.innerHTML = "10000";
        rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
    }
    });
    const land = document.getElementById("landing");
    landing.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        background.style.backgroundColor = "green";
        innerHeight.innerHTML = "0";
        rocket.style.bottom = "0px";

    });

    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const right = document.getElementById("right");
    const left = document.getElementById("left");

    const abort = document.getElementById("missionAbort");
    abort.addEventListener("click", function(){
        let toAbort = window.confirm("Confirm that you want to abort the mission.");
        if (toAbort){
            status.innerHTML = "Mission aborted.";
            background.style.backgroundColor = "red";
            height.innerHTML = "0";
            rocket.style.bottom = "0px";
            rocket.style.left = "270px";
        }
    });

    up.addEventListener("click", function(){
        if (status.innerHTML === "Shuttle in flight." && parseInt(shuttleHeight.innerHTML) < 250000){
        rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
        }
    });

    down.addEventListener("click", function(){
        if (status.innerHTML === "Shuttle in flight." && parseInt(shuttleHeight.innerHTML) !== 0){
        rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px";
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
        }
    });

    right.addEventListener("click", function(){
        if (status.innerHTML === "Shuttle in flight."){
        rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
        }
    });

    left.addEventListener("click", function(){
        if (status.innerHTML === "Shuttle in flight."){
        rocket.style.left = parseInt(rocket.style.left) - 10 + "px";
        }
    });


});