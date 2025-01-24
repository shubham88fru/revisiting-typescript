interface Point {
  x: number;
  y: number;
}

let pt: Point = { x: 1, y: 2 };
// pt = {x: 1}; //not allowed
// pt = { x: 1, y: 2, z: 3 }; //not allowed
pt = { x: 1, y: 2, z: 3 } as Point; //allowed
pt = { x: 1 } as Point; // allowed - wtf!!!
console.log(pt.y); //undefined - wtf!!!

interface Person {
  readonly id: number; //read-only - cannot be changed
  first: string;
  last: string;
  nickname?: string; //optional
  sayHi: () => string; //obj should have a method that returns a string
}

interface Point3D extends Point {
  //extend another interface
  z: number;
}
