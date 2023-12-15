
let steps = 0;
let trafficLightsElem = null;
let lightElements = null;
let redLight = null;
let yellowLight = null;
let greenLight = null;
let blinkingState = false;


function startWorking(timeSwitchingRedLightParam, timeSwitchingYellowLightParam, timeSwitchingGreenLightParam, timeBlinkingParam, idParam) {
        timeSwitchingRedLight = timeSwitchingRedLightParam;
        timeSwitchingYellowLight = timeSwitchingYellowLightParam;
        timeSwitchingGreenLight = timeSwitchingGreenLightParam;
        timeBlinking = timeBlinkingParam;
        id = idParam;
        trafficLightsElem = document.getElementById(`${id}`);
        lightElements = trafficLightsElem.getElementsByClassName("lights");
        redLight = lightElements[0].children[0];
        yellowLight = lightElements[0].children[1];
        greenLight = lightElements[0].children[2];
        redLight.style.display = "inherit";
        yellowLight.style.display = "none";
        greenLight.style.display = "none";
        steps = 0;
        timerSwitching(timeSwitchingRedLight);
}

function timerSwitching(timeSwitching) {
        intervalID = setTimeout(() => switching(timeSwitchingRedLight, timeSwitchingYellowLight, timeSwitchingGreenLight, timeBlinking), timeSwitching);
}

function switching(timeSwitchingRedLight, timeSwitchingYellowLight, timeSwitchingGreenLight, timeBlinking) {
        steps++;

        if (blinkingState == true) {
                steps--;
        }

        switch (steps) {
                case 1:
                        yellowLight.style.display = "inherit";
                        timerSwitching(timeSwitchingYellowLight);
                        break;
                case 2:
                        redLight.style.display = "none";
                        yellowLight.style.display = "none";
                        greenLight.style.display = "inherit";
                        timerSwitching(timeSwitchingGreenLight);
                        break;
                case 3:
                        blinking(true);
                        break;
                case 4:
                        blinking(false);
                        redLight.style.display = "none";
                        yellowLight.style.display = "inherit";
                        greenLight.style.display = "none";
                        break;
                case 5:
                        clearTimeout(intervalID);
                        startWorking(2000, 1000, 4000, 1000, 1);
                        break;
        }
}

function blinking(active) {
        if (active) {
                greenLight.style.animationName = "blinking";
                blinkingState = true;
                setTimeout(() => {
                        blinkingState = false;
                        timerSwitching(timeSwitchingYellowLight);
                }, timeBlinking)
        }

        else {
                greenLight.style.animationName = "none";
                timerSwitching(timeSwitchingYellowLight);
        }
}

startWorking(2000, 1000, 4000, 1000, 1);



