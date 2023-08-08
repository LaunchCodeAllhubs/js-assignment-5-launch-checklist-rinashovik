
// Write your helper functions here!
require('isomorphic-fetch');





function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
	// Here is the HTML formatting for our mission target div.
	document;
	missionTarget = document.getElementById("missionTarget");

	missionTarget.innerHTML = `<h2>Mission Destination</h2>
	<ol>
		<li>Name: ${name} </li>
		<li>Diameter: ${diameter} </li>
		<li>Star: ${star} </li>
		<li>Distance from Earth: ${distance} </li>
		<li>Number of Moons: ${moons} </li>
	</ol>
	<img src= ${image}>`;


}


function validateInput(testInput) {
	testInput;
	if (testInput === "") {
		return "Empty";
		// alert("Empty");
		//alert("All fields are required!");

	}
	if (isNaN(testInput) === true) {

		return "Not a Number";

		//alert( "Not a Number");
	}


	if (isNaN(testInput) === false) {
		//Number(testInput)
		return "Is a Number";
		//alert (" Invalid Information");

	}


}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {


	// Create DOM objects for form elements
	document; // = document;
	// list = document.getElementById("faultyItems");
	// pilot = document.querySelector("input[name=pilotName]");
	// copilot = document.querySelector("input[name=copilotName]");
	// fuelLevel = document.querySelector("input[name=fuelLevel]");
	// cargoLevel = document.querySelector("input[name=cargoMass]");

	pilotStatus = document.getElementById("pilotStatus");
	copilotStatus = document.getElementById("copilotStatus");
	launchStatusCheck = document.getElementById("launchStatusCheck");
	launchStatus = document.getElementById("launchStatus"); // h2 heading
	fuelStatus = document.getElementById("fuelStatus");
	cargoStatus = document.getElementById("cargoStatus");


	// pilot.value = pilot.value;
	// copilot.value = copilot.value;
	// fuelLevel.value = fuelLevel.value;
	// cargoLevel.value = cargoLevel.value;

	//pilot.onblur = function() {validateInput(pilot.value)};
	console.log(validateInput(pilot.value));
	// alert("Pilot: " + pilot.value);

	console.log(validateInput(copilot.value));

	//alert("CoPilot: " + copilot.value);

	console.log(validateInput(fuelLevel.value));
	// alert("FuelLevel: " + fuelLevel.value);

	console.log(validateInput(cargoLevel.value));
	// alert("CargoLevel: " + cargoLevel.value);


	if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty"  || validateInput(fuelLevel) === "Empty"  ||validateInput(cargoLevel) === "Empty" ) {
		//return "Empty";
		// alert("Empty");
		alert("All fields are required!");

		// console.log("All fields are required!");

	}
 else if((validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number")) {


		//return "Not a Number";
		alert("Invalid Input");//

		// console.log("Invalid Input");
	}


	else  if (validateInput(fuelLevel) === "Not a Number"  ||validateInput(cargoLevel) === "Not a Number") {
		//Number(testInput)
		//return "Is a Number";
		alert("Invalid Input");//

		// console.log(" Invalid Input");

	}else{

	//console.logs(list);

		// pilotStatus.innerHTML = `Pilot Chris is ready for launch`;
		// copilotStatus.innerHTML = `Co-pilot Bob is ready for launch`;
		list.style.visibility = "visible";

		pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
		copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

	/*	list.innerHTML = `<div  id="faultyItems" data-testid="faultyItems">
                <ol>
                    <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot.value} Ready</li>
                    <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot.value} Ready</li>
                    <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
                    <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
                </ol>
            </div>`;
*/
			//console.log(list)

			
	if (fuelLevel < 10000) {
		
		fuelStatus.textContent = `Fuel level too low for launch`;
		cargoStatus.textContent = `Cargo mass low enough for launch`;

		launchStatus.textContent = `Shuttle Not Ready for Launch`;
		launchStatus.style.color = "rgb(199, 37, 78)"; //;// changing from "red"; Checked
		console.log(cargoStatus.textContent);//PASS


	}

	if (cargoLevel > 10000) {
		list.style.visibility = "visible";
		// pilotStatus.innerHTML = `Pilot Chris is ready for launch`;
		// copilotStatus.innerHTML = `Co-pilot Bob is ready for launch`;
		// //pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
		//copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
		//fuelStatus.textContent = `Fuel level high enough for launch`;

		cargoStatus.textContent = `Cargo mass too heavy for launch`;
		launchStatus.textContent = `Shuttle Not Ready for Launch`;

		launchStatus.style.color = "rgb(199, 37, 78)"; //"#C7254E"; //OR  rgb(199, 37, 78);	
		console.log(fuelStatus.textContent);// Pass


	}

	if (fuelLevel < 10000 && cargoLevel > 10000) {
		//list.style.visibility = "visible";
		// pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
		// copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
		fuelStatus.textContent = `Fuel level too low for launch`;

		cargoStatus.textContent = `Cargo mass too heavy for launch`;

		launchStatus.textContent = `Shuttle Not Ready for Launch`;
		launchStatus.style.color = "rgb(199, 37, 78)"; //rgb(199, 37, 78)";

	}


	if (fuelLevel > 10000 && cargoLevel> 10000) {
		//list.style.visibility = "visible";
		// pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
		// copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
		 fuelStatus.textContent = `Fuel level high enough for launch`;

		cargoStatus.textContent = `Cargo mass too heavy for launch`;

		launchStatus.textContent = `Shuttle Not Ready for Launch`;
		launchStatus.style.color = "rgb(199, 37, 78)"; //rgb(199, 37, 78)";

	}


// if (fuelLevel.value < 10000 && cargoLevel.value > 10000) {
// 	list.style.visibility = "visible";
// 	launchStatus.style.color = "#419F6A"; //rgb(65, 159, 106)";
// 	launchStatus.textContent = `Shuttle is Ready for launch`;//pass



	if (fuelLevel> 10000 && cargoLevel < 10000){//} && (isNaN(pilot.value && copilot.value) === true) && (isNaN(fuelLevel.value && cargoLevel.value) === false)) {
		// if ((fuelLevel.value > 10000 && cargoLevel.value < 10000) && isNaN(pilot.value && copilot.value) === true){
		//list.style.visibility = "visible";
		//pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
		//copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
		// pilotStatus.innerHTML = `Pilot Chris is ready for launch`;
		// copilotStatus.innerHTML = `Co-pilot Bob is ready for launch`;
		fuelStatus.textContent = `Fuel level high enough for launch`;
		cargoStatus.textContent = `Cargo mass low enough for launch`;
		launchStatus.style.color = "rgb(65, 159, 106)";
		launchStatus.textContent = `Shuttle is Ready for Launch`;//pass
		//console.log(list)


	}






	console.log(list)
}
}

// console.log(myFetch());


async function myFetch() {


	let planetsReturned;

	planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {

		return response.json();

	});

	return planetsReturned;
}


function pickPlanet(planets) { //final code

	let index = Math.floor(Math.random() * planets.length);
	//console.log(index);
	return planets[index];

}





module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;