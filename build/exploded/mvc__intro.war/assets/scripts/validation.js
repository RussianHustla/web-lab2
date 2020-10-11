"use strict"

function isNotFloat(line) {
  console.log(`got ${line} argument`);
  const floatRegex = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;
  console.log('check with regular expression');
  if (!floatRegex.test(line)) return true;
  console.log('the argument looks like float number');
  let number = parseFloat(line);
  console.log('argument parsed into float');
  console.log('check if it is not a NaN');
  return isNaN(number);
}

function checkYParam(input) {
	console.log('Getting element value');
	let inputted = input.value;
	console.log(`The value [y = ${inputted}] successfully got`);
	console.log('Checking on number identity');
	if (isNotFloat(inputted)) {
		console.log('Typed value is not a number');
		alert('Your typed value (изменение Y: ' + inputted + ') is not a number');
		return false;
	} else {
    let y = parseFloat(inputted);
		console.log('Typed value parsed into number');
		if ((-3 <= y - Number.EPSILON) && (y + Number.EPSILON <= 5)) {
			console.log('Good value');
			return true;
		} else {
			console.log('Wrong value');
			alert('Your typed Y parameter value (изменение Y: ' + inputted + ') doesn\'t match conditions: must be between -3 and 5 implicitly');
			return false;
		}
	}
	console.log('Successfully worked')
}

function checkRParam(input) {
  console.log('Getting element value');
  let inputted = input.value;
  console.log(`The value [r = ${inputted}] successfully got`);
  console.log('Checking existing of value');
  if (!inputted) {
    console.log("R value wasn't set");
    alert("You have chosen none R value, please, press the button at least 1 time");
    return false;
  }
  console.log('R parameter is set');
  return true;
}

function validateForm(yid, rid) {
	console.log("Getting input element");
	let inputElement = document.getElementById(yid);
  let inputRlement = document.getElementById(rid);
	if (inputElement != null && inputRlement != null) {
		console.log("Successfully discovered input element");
		return checkYParam(inputElement) && checkRParam(inputRlement);
	}
	console.log("Element for validation not found");
	return false;
}