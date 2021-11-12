// Three ways of creating functions
/**
 *
 * string type str in function params
 * function helloWorld
 * return message/greetings
 * this is arrow function -> lambda function
 * this function can only be called after decleration
 * this is introduced in ES6
 * @param {string} str
 */
const helloWorld = (str) => {
  alert(str);
};
// helloWorld("Hi there");

/**
 * string type str in function params
 * function helloWorldFunction
 * return message/greetings
 * this is normal function which can be called before decleration
 * its the part of ES5 and ES6
 * @param {string} str
 */
// helloWorldFunction("Bye bynder!!!");
function helloWorldFunction(str) {
  alert(str);
}

/**
 * string type str in function params
 * function helloWorldAnonymousFunction
 * return message/greetings
 * this is anonymous function which can not be called before decleration
 * its the part of ES6
 * @param {string} str
 */
const helloWorldAnonymousFunction = function (str) {
  alert(str);
};
helloWorldAnonymousFunction("Hi there");
