let age: number | string = 21;
age = "21"; //allowed.
age = 21; //allowed.
// age = true; //not allowed.

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  lon: number;
};

let coordinates: Point | Loc = { x: 1, y: 2 }; //allowed.
coordinates = { lat: 1, lon: 2 }; //allowed.
coordinates = { x: 1, y: 2, lat: 1, lon: 2 }; //allowed.
// coordinates = { x: 1 }; //not allowed.
// coordinates = { lat: 1 }; //not allowed.
// coordinates = { x: 1, y: 2, lat: 1 }; //not allowed.
