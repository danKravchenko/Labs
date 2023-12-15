class TrafficLights {
        #steps = 0;
        #trafficLightsElem = null;
        #lightElements = null;
        #redLight = null;
        #yellowLight = null;
        #greenLight = null;
        #blinkingState = false;

        constructor(timeSwitchingRedLight, timeSwitchingYellowLight, timeSwitchingGreenLight, timeBlinking, id) {
                this.timeSwitchingRedLight = timeSwitchingRedLight;
                this.timeSwitchingYellowLight = timeSwitchingYellowLight;
                this.timeSwitchingGreenLight = timeSwitchingGreenLight;
                this.timeBlinking = timeBlinking;
                this.id = id;
        }

        startWorking() {
                this.trafficLightsElem = document.getElementById(`${this.id}`);
                this.lightElements = this.trafficLightsElem.getElementsByClassName("lights");
                this.redLight = this.lightElements[0].children[0];
                this.yellowLight = this.lightElements[0].children[1];
                this.greenLight = this.lightElements[0].children[2];

                this.redLight.style.display = "inherit";
                this.yellowLight.style.display = "none";
                this.greenLight.style.display = "none";
                this.steps = 0;
                this.#timerSwitching(this.timeSwitchingRedLight);
        }

        #timerSwitching(timeSwitching) {
                this.intervalID = setTimeout(() => this.#switching(), timeSwitching);
        }

        #switching() {
                this.steps++;

                if (this.blinkingState == true) {
                        this.steps--;
                }

                switch (this.steps) {
                        case 1:
                                this.yellowLight.style.display = "inherit";
                                this.#timerSwitching(this.timeSwitchingYellowLight);
                                break;
                        case 2:
                                this.redLight.style.display = "none";
                                this.yellowLight.style.display = "none";
                                this.greenLight.style.display = "inherit";
                                this.#timerSwitching(this.timeSwitchingGreenLight);
                                break;
                        case 3:
                                this.#blinking(true);
                                break;
                        case 4:
                                this.#blinking(false);
                                this.redLight.style.display = "none";
                                this.yellowLight.style.display = "inherit";
                                this.greenLight.style.display = "none";
                                break;
                        case 5:
                                clearTimeout(this.intervalID);
                                this.startWorking();
                                break;
                }
        }

        #blinking(active) {
                if (active) {
                        this.greenLight.style.animationName = "blinking";
                        this.blinkingState = true;
                        setTimeout(() => {
                                this.blinkingState = false;
                                this.#timerSwitching(this.timeSwitchingYellowLight);
                        }, this.timeBlinking)
                }

                else {
                        this.greenLight.style.animationName = "none";
                        this.#timerSwitching(this.timeSwitchingYellowLight);
                }
        }
}

let TrafficLights_1 = new TrafficLights(2000, 1000, 4000, 1000, 1); 
TrafficLights_1.startWorking();



