let activeUsers: string[];
activeUsers = ["Harry", "Ron", "Hermione"];
// activeUsers.push(4); not allowed.

const bools: Array<boolean> = [true, false, true]; // same as boolean[]

type Point = {
  x: number;
  y: number;
};
const coords: Point[] = [
  { x: 0, y: 0 },
  { x: 1, y: 1 },
];

// coords.push({ x: 'hi', y: 3}); //not allowed
// coords.push({x: 1}) // not allowed
