"use strict";

var typeOrder = {
	normal: 0,
	fire: 1,
	water: 2,
	electric: 3,
	grass: 4,
	ice: 5,
	fighting: 6,
	poison: 7,
	ground: 8,
	flying: 9,
	psychic: 10,
	bug: 11,
	rock: 12,
	ghost: 13,
	dragon: 14,
	dark: 15,
	steel: 16,
	fairy: 17
};

var typeChart = {
	normal: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5, 1],
	fire: [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2, 1],
	water: [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1],
	electric: [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1, 1],
	grass: [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 1],
	ice: [0, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5, 1],
	fighting: [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2, 0.5],
	poison: [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0, 2],
	ground: [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2, 1],
	flying: [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5, 1],
	psychic: [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5, 1],
	bug: [1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5, 0.5],
	rock: [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5, 1],
	ghost: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 1],
	dragon: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5, 0],
	dark: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 0.5],
	steel: [1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 2],
	fairy: [1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 1]
};

function calculateEffectiveness() {
	var attackString = document.getElementById("attacking_type").value;
	var defenceString = document.getElementById("defending_type").value;
	var defenceString2 = document.getElementById("defending_type2").value;
	var row = typeChart[attackString];
	var column = typeOrder[defenceString];
	if (defenceString2 === "") {
		console.log(attackString + " is " + row[column] + "x effective against " + defenceString);
		document.getElementById("output").innerHTML = attackString + " is " + row[column] + "x effective against " + defenceString
	} else {
		column = typeOrder[defenceString2];
		console.log(attackString + " is " + row[column] + "x effective against " + defenceString2);
		document.getElementById("output").innerHTML = attackString + " is " + row[column] + "x effective against " + defenceString2;
	}

}

function calculateDualEffectiveness() {
	var attackString = document.getElementById("attacking_type").value;
	var defenceString = document.getElementById("defending_type").value;
	var defenceString2 = document.getElementById("defending_type2").value;
	var row = typeChart[attackString];
	var column = typeOrder[defenceString];
	var column2 = typeOrder[defenceString2];
	if (defenceString === defenceString2) {
		console.log(attackString + " is " + row[column] + "x effective against " + defenceString);
		document.getElementById("output").innerHTML = attackString + " is " + row[column] + "x effective against " + defenceString;
	} else {
		console.log(attackString + " is " + (row[column] * row[column2]) + "x effective against dual-type " + defenceString +
			" & " + defenceString2);
		document.getElementById("output").innerHTML = attackString + " is " + (row[column] * row[column2]) + "x effective against dual-type " +
			defenceString +
			" & " + defenceString2;
	}
}

function isDualType() {
	var attackString = document.getElementById("attacking_type").value;
	var defenceString = document.getElementById("defending_type").value;
	var defenceString2 = document.getElementById("defending_type2").value;
	if (defenceString === "" && defenceString2 === "") {
		console.log("Enter a defence value");
		document.getElementById("output").innerHTML = "Enter a defence value";
	} else if (attackString === "") {
		console.log("Enter an attack value");
		document.getElementById("output").innerHTML = "Enter an attack value";
	} else if (defenceString === "" || defenceString2 === "") {
		calculateEffectiveness();
	} else {
		calculateDualEffectiveness();
	}
}