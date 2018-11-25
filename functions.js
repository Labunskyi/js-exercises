/*
TASK 1

Write a sum method which will work properly when invoked using either syntax below.

function sum(a, b) {

}

console.log(sum(2, 3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5
console.log(sum(2)(3)(5));  // Outputs 10
*/

// ANSWER TASK 1
function sum(a, b) {
	if (b != undefined) {
	return a + b;
	} else {
		var currentSum = a;
		function sum(b) {
		currentSum += b;
		return sum;
		}
		sum.toString = function() {
		return currentSum;
		};
		return sum;
	}
}

console.log(sum(2, 3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5
console.log(sum(2)(3)(5));  // Outputs 10

/*
TASK 2

Write a function "once"

function once(someFunc) {
	
}

function callMeOnlyOncePlease(x, y) {
	return x + y;
}

var cally = once(callMeOnlyOncePlease);

console.log(cally(10, 15)); // 25
console.log(cally(5, 6)); // undefined
console.log(cally(5, 6)); // undefined
*/

// ANSWER TASK 2
function once(someFunc) {
	var executed = false;
	return function() {
		if (!executed) {
			executed = true;
			return someFunc.apply(this, arguments);
		}
	}
}

function callMeOnlyOncePlease(x, y) {
	return x + y;
}

var cally = once(callMeOnlyOncePlease);

console.log(cally(10, 15)); // 25
console.log(cally(5, 6)); // undefined
console.log(cally(5, 6)); // undefined

/*
TASK 3

In this case we want you to create a function wrapper, 
which takes a function and caches its results depending on the arguments, that were applied to the function.

Usage example:

var sum = function(a, b) {
	return a + b;
};

var cachedSum = cache(sum);

function cache() {

}

cachedSum('foo', 'bar'); // complex function should be executed // foobar
cachedSum('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned // foobar
cachedSum('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments // foobaz
*/

// ANSWER TASK 3
var sum = function(a, b) {
	return a + b;
};

var cachedSum = cache(sum);

function cache() {
	var cached = {};
	return function (a, b){
		if (!(a & b in cached)) {
		cached[a] = sum.apply(this, arguments);
		}
	return cached;
	}
}

console.log(cachedSum('foo', 'bar')); // foobar
console.log(cachedSum('foo', 'bar')); // foobar
console.log(cachedSum('foo', 'baz')); // foobaz

/*
TASK 4
Write a function that takes in a string of one or more words, and returns the same string, 
but with all five or more letter words reversed. 
Strings passed in will consist of only letters and spaces. Spaces will be included only 
when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

// ANSWER TASK 4. 1st VARIANT
function spinWords(string){
	var arr = string.split(' ');
	for(i=0; i<arr.length; i++){
		if(arr[i].length>4){
			arr[i] = arr[i].split('').reverse().join('');
		}
	}
  return arr.join(' ');
}

console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));

// ANSWER TASK 4. 2nd VARIANT

function spinWords(sentence){

    function reverse(s) {
        return s.split('').reverse().join('');
    }

    var words = sentence.split(" ");
    var strings = [];
    for (var i=0; i<words.length; i++) {
        var word = words[i].toString();
        var backwards = reverse(word);

        if (word.length>=5){
            strings.push(backwards);
        } else {
            strings.push(word);
        }    
    }
    return strings.join(' ');
}

console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));