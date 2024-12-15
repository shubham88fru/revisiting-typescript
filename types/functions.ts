/* func parameter types */
function greet(person: string) {
  return `Hi, ${person}`;
}

greet("Shubham"); //allowed
// greet(5); //not allowed.

/* func return types */
function sum(num: number, num2: number): number {
  return num + num2;
}
