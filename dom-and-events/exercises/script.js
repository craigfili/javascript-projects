function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston, we have liftoff!';
    });

    function abortFunc() {
        let abortMission = window.confirm("Are you sure you want to abort the mission?");
        if (abortMission){
            paragraph.innerHTML = 'Mission aborted! Space shuttle returning home';
        }
    }
    missionAbort.addEventListener('click', abortFunc);

    missionAbort.addEventListener("mouseover", event => {
        missionAbort.style.backgroundColor = "red";
    })
    missionAbort.addEventListener("mouseout", event => {
        missionAbort.style.backgroundColor = "";
    })
}

window.addEventListener("load", init);
