// Write your helper functions here!
require('isomorphic-fetch');



function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
	// Here is the HTML formatting for our mission target div.

	//missionTarget = document.getElementById("missionTarget");


	missionTarget.innerHTML = `<h2>Mission Destination</h2>
	<ol>
		<li>Name: ${name} </li>
		<li>Diameter: ${diameter} </li>
		<li>Star: ${star} </li>
		<li>Distance from Earth: ${distance} </li>
		<li>Number of Moons: ${moons} </li>
	</ol>
	<img src=${"image"}>`;


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
		Number(testInput)
		return "Is a Number";
		//alert (" Invalid Information");

	}


}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

	// alert("The form was submitted");
	// Create DOM objects for form elements

	list = document.getElementById("faultyItems");
	pilot = document.getElementById("pilotName");
	pilot = document.querySelector("input[name=pilotName]");
	copilot = document.querySelector("input[name=copilotName]");
	fuelLevel = document.querySelector("input[name=fuelLevel]");
	cargoLevel = document.querySelector("input[name=cargoMass]");



	pilot.value = pilot.value;
	copilot.value = copilot.value;
	fuelLevel.value = fuelLevel.value;
	cargoLevel.value = cargoLevel.value;


	//pilot.onblur = function() {validateInput(pilot.value)};
	console.log(validateInput(pilot.value));
	// alert("Pilot: " + pilot.value);



	console.log(validateInput(copilot.value));

	//alert("CoPilot: " + copilot.value);

	console.log(validateInput(fuelLevel.value));
	// alert("FuelLevel: " + fuelLevel.value);



	console.log(validateInput(cargoLevel.value));
	// alert("CargoLevel: " + cargoLevel.value);


	if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoLevel.value === "") {
		alert("All fields are required!");
		//event.preventDefault(); //stop submit form
	// } else {
	 	//alert("Form submited  ");
	 }
	//  if (((pilot.value && copilot.value) === String) && (isNaN(fuelLevel.value && cargoLevel.value) === false)) {
	// 	alert("Form submited ");
	// }


	if (isNaN(pilot.value) === false) {
		alert("Pilot: " + pilot.value);
		alert("Invalid Information");
	}
	if (isNaN(copilot.value) === false) {
		alert("CoPilot: " + copilot.value);
		alert("Invalid Information");


	}
	if (isNaN(fuelLevel.value) === true) {
		alert("FuelLevel: " + fuelLevel.value);
		alert("FuelLevel: Invalid Information");

	};

	if (isNaN(cargoLevel.value) === true) {
		alert("CargoLevel: " + cargoLevel.value);
		alert("CargoLevel: Invalid Information");


	}
	// if (((pilot.value && copilot.value) === String) && (isNaN(fuelLevel.value && cargoLevel.value) === false)) {
	// 	alert("Form submited ");
	// }
	if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoLevel.value === "") {
		alert("All fields are required!");
		//event.preventDefault(); //stop submit form
	// } else {
	 	//alert("Form submited  ");
	 }


	// // After Submit the form LaunchStatus is Checking
	
	let pilotStatus = document.getElementById("pilotStatus");
	let copilotStatus = document.getElementById("copilotStatus");
	let launchStatusCheck =document.getElementById("launchStatusCheck");
	let launchStatus = document.getElementById("launchStatus"); // h2 heading
	let fuelStatus = document.getElementById("fuelStatus");
	let cargoStatus = document.getElementById("cargoStatus");

	pilotStatus.innerHTML = `Pilot ${pilot.value} Ready`;
	copilotStatus.innerHTML = `Co-pilot ${copilot.value} Ready`;

	if (fuelLevel.value < 10000) {
		list.style.visibility = "visible";
		fuelStatus.textContent = `Fuel level too low for launch`;
		launchStatus.textContent = `Shuttle not ready for launch`;
		launchStatus.style.color = "red";
		// console.log(launchStatus.textContent);
		// console.log(fuelStatus.innerHtml);
		// console.log(launchStatus.style.color);
		alert (`Fuel level too low for launch`);
		alert(launchStatus.textContent);

	} 

	if (fuelLevel.value === 890 && cargoLevel.value < 10000) {
		list.style.visibility = "visible";
		fuelStatus.textContent = `Not enough fuel for the shuttle to launch`;
		launchStatus.textContent = `Shuttle not ready for launch`;
		launchStatus.style.color = "red";
		// console.log(launchStatus.textContent);
		// console.log(fuelStatus.innerHtml);
		// console.log(launchStatus.style.color);
		alert (`Fuel too low for launch`);
		alert(launchStatus.textContent);

	}
	if (cargoLevel.value > 10000) {
		list.style.visibility = "visible";
		cargoStatus.textContent = `Cargo mass too much for launch`;
		launchStatus.textContent = `Shuttle not ready for launch`;
		launchStatus.style.color = "#C7254E"; //OR  rgb(199, 37, 78); 
		// console.log(launchStatus.textContent);
		// console.log(cargoStatus.innerHTML);
		// console.log(launchStatus.style.color);
		alert (`Cargo too heavy for launch`);
		alert(launchStatus.textContent);

	}

	

		// pilotStatus.innerHTML === `Pilot ${pilot.value} Ready`;
		// copilotStatus.innerHTML = `Co-pilot ${copilot.value} Ready`;
		if (fuelLevel.value > 10000 && cargoLevel.value < 10000 && cargoLevel.value !== "") {//} && (isNaN(pilot.value && copilot.value) === true) && (isNaN(fuelLevel.value && cargoLevel.value) === false)){
      // if ((fuelLevel.value > 10000 && cargoLevel.value < 10000) && isNaN(pilot.value && copilot.value) === true){
            list.style.visibility = "visible";

		//fuelStatus.textContent = `Fuel level high enough for launch`;

		//cargoStatus.textContent = `Cargo mass low enough for launch`;
		launchStatus.style.color = "#419F6A"; // rgb(65, 159, 106)";
		launchStatus.textContent = `Shuttle is ready for launch`;
		alert(`Everything is good to go`)
		alert(launchStatus.textContent);



	}


}

// console.log(myFetch());


     async function myFetch() {

	
        let planetsReturned;

        planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {

        return response.json();

              });

        return planetsReturned;
    }


    function pickPlanet(planets) {//final code

       let  index = Math.floor(Math.random()*planets.length);
         //console.log(index);
               return planets[index];

}



module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;