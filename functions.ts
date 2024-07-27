function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log(num);
}

function printResult2(num: number): undefined {
  console.log(num);
  return;
}

let combineValues: Function;
combineValues = add;
// combineValues = printResult // won't give error!

console.log(combineValues(8, 8));

let combineValues2: (a: number, b: number) => number;
combineValues2 = add;
//combineValues2 = printResult; //wont work.
console.log(combineValues2(8, 8));
