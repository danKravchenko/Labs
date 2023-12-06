class TrafficLights {
        #steps = 0;
        #trafficLightsElem = null;
        #lightElements = null;
        #redLight = null;
        #yellowLight = null;
        #greenLight = null;
        #blinkingState = false;

        constructor(timeSwitching, timeBlinking, id) {
                this.timeSwitching = timeSwitching;
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
                this.intervalID = setInterval(() => this.#switching(), this.timeSwitching);
        }

        #switching() {
                this.steps++;

                if (this.blinkingState == true) {
                        this.steps--;
                }

                switch (this.steps) {
                        case 1:
                                this.yellowLight.style.display = "inherit";
                                break;
                        case 2:
                                this.redLight.style.display = "none";
                                this.yellowLight.style.display = "none";
                                this.greenLight.style.display = "inherit";
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
                                clearInterval(this.intervalID);
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
                        }, this.timeBlinking)
                }

                else {
                        this.greenLight.style.animationName = "none";
                }
        }
}

let TrafficLights_1 = new TrafficLights(5000, 5000, 1); ///  timeSwitching, timeBlinking, id
TrafficLights_1.startWorking();



