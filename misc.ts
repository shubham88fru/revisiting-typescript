let userInput: unknown; //`unknown` type is differnt than `any`.
let username: string;

userInput = 5; //works
userInput = "Max"; //works
// username = userInput //won't work. coz userInput's type is unknown, so it can't be a string.

//this would work.
if (typeof userInput === "string") {
  username = userInput;
}

//neither void, nor undefined
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occured", 500);

//arrow functions.
const add = (a: number, b: number = 1) => a + b; //default second argument to 1.

//arrays.
const add2 = (...numbers: number[]) => {
  let result = 0;
  console.log(numbers);
};
add2(5, 10, 1.1, 2, 3.7);

const add3 = (...numbers: [number, number, number]) => {
  let result = 0;
  console.log(numbers);
};
add3(5, 6, 7); //can pass only 3 args.
