"use strict";

class Planet {
	constructor (mass, moons) {
		this.mass = mass;
		this.moons = moons || 0;
	}

	reportMoons ( {
		console.log('I have ${this.moons} moons.')
	}
}

const jupitor = new Planet('Pretty Big', 67);
jupitor.reportMoons();