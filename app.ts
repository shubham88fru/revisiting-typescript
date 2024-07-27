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
