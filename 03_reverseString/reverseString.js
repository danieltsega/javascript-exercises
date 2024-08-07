const reverseString = function(word) {
	let newWord = [...word];
	let newArray = []

	for (let i = newWord.length-1; i >= 0; i--){
		newArray.push(newWord[i]);
	}
	return newArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
