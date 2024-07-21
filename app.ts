//type alias
type NumAndStr = number | string; //union
type User = { name: string; age: number };

const u1: User = { name: "Shubham", age: 26 };

function combine(input1: NumAndStr, input2: NumAndStr) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
const combinedNames = combine("Max", "Anna");
