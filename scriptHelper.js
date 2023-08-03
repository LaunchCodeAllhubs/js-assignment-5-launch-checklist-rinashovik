// Write your helper functions here!
require('isomorphic-fetch');



function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
	// Here is the HTML formatting for our mission target div.


	let missionTarget = document.getElementById("missionTarget");


	missionTarget.innerHTML = `  <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${mission.name} </li>
                    <li>Diameter: ${mission.diameter}</li>
                    <li>Star: ${mission.star}</li>
                    <li>Distance from Earth: ${mission.distance}</li>
                    <li>Number of Moons: ${mission.moons}</li>
                </ol>
                <img src="${mission.image}">`;


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
		event.preventDefault(); //stop submit form
	} else {
		alert("Form submited  ");
	}

	pilot.addEventListener("input", function() {
		pilot.innerHTML = "The value of Pilot";
	})
	if (isNaN(pilot.value) === false) {
		alert("Pilot: " + pilot.value);

		alert("Invalid Information");
	}
	if (isNaN(copilot.value) === false) {
		alert("CoPilot: " + copilot.value);



	}
	if (isNaN(fuelLevel.value) === true) {
		alert("FuelLevel: " + fuelLevel.value);

		alert("FuelLevel: Invalid Information");
		//}else {

	};

	if (isNaN(cargoLevel.value) === true) {
		alert("CargoLevel: " + cargoLevel.value);

		alert("CargoLevel: Invalid Information");


	}
	if (((pilot.value && copilot.value) === String) && (isNaN(fuelLevel.value && cargoLevel.value) === false)) {
		alert("Form submited ");
	}




	// // After Submit the form LaunchStatus is Checking



	let pilotStatus = document.getElementById("pilotStatus");

	pilotStatus.innerHTML = `Pilot ${pilot.value} Ready`;

	// console.log(pilotStatus.value)
	// console.log(pilotStatus.innerHTML);

	let copilotStatus = document.getElementById("copilotStatus");
	copilotStatus.innerHTML = `Co-pilot ${copilot.value} Ready`;
	//console.log(copilotStatus.innerHTML);

	//let launchStatusCheck =document.getElementById("launchStatusCheck");

	let launchStatus = document.getElementById("launchStatus"); // h2 heading

	let fuelStatus = document.getElementById("fuelStatus");


	let cargoStatus = document.getElementById("cargoStatus");

	if (fuelLevel.value === 890 && cargoLevel.value < 10000) {
		list.style.visibility = "visible";
		fuelStatus.textContent = `Fuel level too low for launch`;
		launchStatus.textContent = `Shuttle not ready for launch`;
		launchStatus.style.color = "red";
		// console.log(launchStatus.textContent);
		// console.log(fuelStatus.innerHtml);
		// console.log(launchStatus.style.color);
		alert(launchStatus.textContent);

	}
	if (cargoLevel.value > 10000) {
		list.style.visibility = "visible";
		cargoStatus.textContent = `Cargo mass ${cargoLevel.value} too much for launch`;
		launchStatus.textContent = `Shuttle not ready for launch`;
		launchStatus.style.color = "#C7254E"; // rgb(199, 37, 78); 
		// console.log(launchStatus.textContent);
		// console.log(cargoStatus.innerHTML);
		// console.log(launchStatus.style.color);
		alert(launchStatus.textContent);

	}

	if (fuelLevel.value < 10000) {
		list.style.visibility = "visible";
		fuelStatus.textContent = `Fuel level ${fuelLevel.value} too low for launch`;
		launchStatus.textContent = `Shuttle not ready for launch`;
		launchStatus.style.color = "red";
		// console.log(launchStatus.textContent);
		// console.log(fuelStatus.innerHtml);
		// console.log(launchStatus.style.color);
		alert(launchStatus.textContent);

	} 

		// pilotStatus.innerHTML === `Pilot ${pilot.value} Ready`;
		// copilotStatus.innerHTML = `Co-pilot ${copilot.value} Ready`;
        if (fuelLevel.value > 10000 && cargoLevel.value < 10000) {
            list.style.visibility = "visible";

		fuelStatus.textContent = `Fuel level ${fuelLevel.value} high enough for launch`;

		cargoStatus.textContent = `Cargo mass ${cargoLevel.value} low enough for launch`;
		launchStatus.style.color = "#419F6A"; // rgb(65, 159, 106)";
		launchStatus.textContent = `Shuttle is ready for launch`;

		alert(launchStatus.textContent);



		//       list.innerHTML = ` <div  id="faultyItems" data-testid="faultyItems">
		//       <ol>
		//           <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot.value} Ready</li>
		//           <li id="" data-testid="copilotStatus">Co-pilot ${copilot.value} Ready</li>
		//           <li id="fuelStatus" data-testid="fuelStatus">Fuel level ${fuelLevel.value} high enough for launch</li>
		//           <li id="cargoStatus" data-testid="cargoStatus">Cargo mass ${cargoLevel.value} low enough for launch</li>
		//       </ol>
		//   </div>`;


		// console.log(launchStatus.textContent);
		// //console.log(fuelStatus.innerHtml);

		// console.log(cargoStatus.innerHtml);
		// console.log(launchStatus.style.color);
		// console.log(launchStatus.innerHTML);


	}


	console.log("End Fron Helper");
}


//      async function myFetch() {
//         let planetsReturned;

//         planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {

//         //await response.json();

//        //console.log(response)


//            });

//         return planetsReturned;
//     }


//     function pickPlanet(planets) {//final code

//        let  index = Math.floor(Math.random()*planets.length);

//          console.log(index);


//                return planets[index];

// }





/*

     async function myFetch() {
        let planetsReturned;
    
        planetsReturned = await fetch().then( function(response) {
            });
    
        return planetsReturned;
    }
    

    function pickPlanet(planets) {
    }
     
    */


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;