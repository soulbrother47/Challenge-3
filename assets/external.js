/* PASSWORD GENERATION in JavaScript (JS) */

const resultEl = document.getElementById('result');
const lengthUserInputEl = document.getElementById('length');
const UPcaseEl = document.getElementById('uppercase');
const LOWcaseEl = document.getElementById('lowercase');
const NBRsEl = document.getElementById('numbers');
const SYMsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');



const randomFunc = {
	lower: RandomLow,
	upper: RandomUp,
	number: RandomNbr,
	symbol: RandomSym
}



/* arrow function expression (=>) */
generate.addEventListener('click', () => {
	const length = +lengthUserInputEl.value;
	const hasUpper = UPcaseEl.checked;
	const hasLower = LOWcaseEl.checked;	
	const hasNumber = NBRsEl.checked;
	const hasSymbol = SYMsEl.checked;
	
	resultEl.innerText = producePWD(hasLower, hasUpper, hasNumber, hasSymbol, length);
});


/* produce a password */
function producePWD(lower, upper, number, symbol, length) {
	let genPWD = '';
	const tCnt = lower + upper + number + symbol;
	const tArray = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
/* if no boxes are checked, return empty string to calling function to clear the output window */
	if(tCnt === 0) {
		return '';
	}
	
/* create a loop to generate the password */
/* arrow function expression (=>) */
	for(let i=0; i<length; i+=tCnt) {
		tArray.forEach(type => {
			const funcName = Object.keys(type)[0];
			genPWD += randomFunc[funcName]();
		});
	}
	
	const finalPassword = genPWD.slice(0, length);
	
	return finalPassword;
}



/* get a random lower case alphabet */
function RandomLow() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}



/* get a random uppercase alphabet */
function RandomUp() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}



/* get a random number */
function RandomNbr() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}


/* get a  random symbol */
function RandomSym() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}
