# Challenge-3
// I used the following procedures to set up this web page that generates passwords
// This web page generates passwords from 4 to 26 characters.

// need to randomly generate numbers, uppercase&lowercase letters, symbols -->

/* functions were made to generate different characters */

/* listen for a click */
/* Generate password button is clicked Event */
/* when Generate password button is clicked the function is ran */

// test in the console.log
//console.log(length);

/* variable set to an empty string */

// 1. Init pw var
// 2. Filter out unchecked boxes types
// 3. Loop over length call generator for each type
// 4. Add final pw to the pw var and return to calling function

//generate a random lowercase letter
//lowercase letters: 97-122.   range is 26

//Math.random() generates a random decimal 
//need positive whole numbers not decimals
//then console.log(Math.random() * 26);   26 letters in the alphabet
//still getting a decimal.  need a whole number
//wrap in Math.floor which will round down
//then console.log(Math.floor(Math.random() * 26));  generates numbers representing lowercase alphabets
//codes aren't correct: to get from 97 to 122.  we add the random number generated to 97 to get correct numbet
//console.log(Math.floor(Math.random() * 26) + 97)
//enter Math.floor(Math.random() * 26) + 97 as a parameter to the String.fromCharCode() object in the function
//test by passing the function() as a parameter in the console.log()
//when the browser is refreshed, this always generate all lowercase alphabets

//generate a random lowercase letter
//uppercase letters: 65-90.  range is 26
//function to generate uppercase alphabet

// console.log(String.fromCharCode(65)); 65 is a uppercase A.  shows an A in the console
//then console.log(Math.random());
//Math.random() generates a random decimal
//need whole numbers not decimals
//then console.log(Math.random() * 26);   26 letters in the alphabet
//still getting a decimal.  need a whole number
//wrap in Math.floor which will round down
//then console.log(Math.floor(Math.random() * 26));  generates numbers representing lowercase alphabets
//codes aren't correct: to get from 65 to 90.  we add the random number generated to 65 to get correct numbet
//console.log(Math.floor(Math.random() * 26) + 65)
//enter Math.floor(Math.random() * 26) + 65 as a parameter to the String.fromCharCode() object in the function
/test by passing the function() as a parameter in the console.log()

//generate a random number
//uppercase letters: 48-57.  range is 10
//function to generate numbers
//range of 10 not 26. change 26 to 10
//count starts at 48.  change count to 48 (was 97 or 65)
