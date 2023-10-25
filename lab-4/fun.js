let steps = 0;
let timeSwitching = 0;
let timeBlinking = 0;
let trafficLightsElem = null;
let lightElements = null;
let redLight = null;
let yellowLight = null;
let greenLight = null;
let blinkingState = false;

function startWorking(timeSwitchingParam, timeBlinkingParam, idParam) {
        timeSwitching = timeSwitchingParam;
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
        intervalID = setInterval(switching, timeSwitching);
}

function switching() {
        steps++;

        if (blinkingState == true) {
                steps--;
        }

        switch (steps) {
                case 1:
                        yellowLight.style.display = "inherit";
                        break;
                case 2:
                        redLight.style.display = "none";
                        yellowLight.style.display = "none";
                        greenLight.style.display = "inherit";
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
                        clearInterval(intervalID);
                        startWorking(5000, 10000, 1);
                        break;
        }
}

function blinking(active) {
        if (active) {
                greenLight.style.animationName = "blinking";
                blinkingState = true;
                setTimeout(() => {
                        blinkingState = false;
                }, timeBlinking)
        }

        else {
                greenLight.style.animationName = "none";
        }
}

startWorking(5000, 5000, 1); ///  timeSwitching, timeBlinking, id


