const repeatString = function(word, num) {
	let passedWord = '';

	if (num < 0){
		return "ERROR";
	}
	for (let i = 1; i <= num; i++){
		passedWord += word;
	}
	return passedWord;
};

// Do not edit below this line
module.exports = repeatString;
