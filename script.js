window.addEventListener("load", function() {
	//console.log("Window loaded");
	
	
	
	document;
		list = document.getElementById("faultyItems");

		console.log(list)

		
		let form = document.querySelector("form");

	
	form.addEventListener("submit", function(event) {


		pilot = document.getElementById("pilotName");
		copilot = document.querySelector("input[name=copilotName]");
		fuelLevel = document.querySelector("input[name=fuelLevel]");
		cargoLevel = document.querySelector("input[name=cargoMass]");
		missionTarget = document.getElementById("missionTarget");

		pilotStatus = document.getElementById("pilotStatus");
		copilotStatus = document.getElementById("copilotStatus");
		launchStatusCheck = document.getElementById("launchStatusCheck");
		launchStatus = document.getElementById("launchStatus"); // h2 heading
		fuelStatus = document.getElementById("fuelStatus");
		cargoStatus = document.getElementById("cargoStatus");

		pilot.value = pilot.value;
		copilot.value = copilot.value;
		fuelLevel.value = fuelLevel.value;
		cargoLevel.value = cargoLevel.value;



		formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);

		event.preventDefault();


		//console.log(myFetch());

		let listedPlanets;
		// Set listedPlanetsResponse equal to the value returned by calling myFetch()
		let listedPlanetsResponse = myFetch(); //promise results  GOOD keep this way

		listedPlanetsResponse.then(function(result) { // response json data extracted
			//console.log(result);
			listedPlanets = result;
			//console.log(listedPlanets); // Here listedPlanets is Local variable //Good 

		}).then(function() {

			console.log(listedPlanets)

			// Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.


			missionPlanet = pickPlanet(listedPlanets); // Randomely-selected

			document = window.document;

			addDestinationInfo(document, missionPlanet.name, missionPlanet.diameter, missionPlanet.star, missionPlanet.distance, missionPlanet.moons, missionPlanet.imageUrl);
			//addDestinationInfo(missionPlanet);

		})




	});
});
