window.addEventListener("load", function() {
	console.log("Window loaded");




	let form = document.querySelector("form");
	form.addEventListener("submit", function(event) {



		list = document.getElementById("faultyItems");
		pilot = document.getElementById("pilotName");
		pilot = document.querySelector("input[name=pilotName]");
		copilot = document.querySelector("input[name=copilotName]");
		fuelLevel = document.querySelector("input[name=fuelLevel]");
		cargoLevel = document.querySelector("input[name=cargoMass]");


		formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value); // Right palce don't move


		event.preventDefault(); //stop submit form

		if (((pilot.value && copilot.value) === String) && (isNaN(fuelLevel.value && cargoLevel.value) === false)) {
			alert("Form submited ");
		}




	});



	/*
	//console.log(myFetch());

	let listedPlanets;
	// Set listedPlanetsResponse equal to the value returned by calling myFetch()
	let listedPlanetsResponse = myFetch(); //promise results  GOOD keep this way
	//console.log(listedPlanetsResponse); // same result as call myFetch() function

	listedPlanetsResponse.then(function(result) { // response json data extracted
		

		//console.log(result);

              //result.json();
		listedPlanets = result;
		
		//result.json();


		console.log(listedPlanets); // Here listedPlanets is Local variable //Good 
		// let index = [{name: "R", age: 45}, {name: "S", age: 45}, {name: "M", age: 45}, {name: "E", age: 45}, {name: "K", age: 45}];
		// console.log(pickPlanet(index))



	//}).then(function() {

		//console.log(listedPlanets);

		// Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

		let mission = pickPlanet(listedPlanets) // Randomely-selected


		//console.log(pickPlanet(result))// it is working final have to keep it


		// console.log(pickPlanet(result))// it is working final have to keep it
		console.log(pickPlanet(mission));

	//console.log(addDestinationInfo());


	})

*/

});