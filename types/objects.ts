function printName(person: { first: string; last: string; age: number }) {
  console.log(person);
}

printName({ first: "Shubham", last: "Singh", age: 1 }); //allowed.
// printName( { fname: "Shubham", last: "Singh"}); //not-allowed.
// printName(10); //not allowed.

let coordinate: { x: number; y: number };
coordinate = { x: 1, y: 2 }; //allowed.
// coordinate = "Hi"; //not-allowed.
// coordinate = null; //not-allowed.
// coordinate = { x: 1, y: 2, z: 4}; //not-allowed.

function getRandCoords(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() }; // allowed.
  // return "{x: 1, y: 2}"; //not-allowed.
  // return { x: "1", y: "2" }; //not-allowed.
}

//type alias for objects.
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.33;
}

function printSong(song: Song) {
  console.log(`${song.title} - ${song.artist}`);
}

const song: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 1288573,
  credits: {
    producer: "Phil Spector",
    writer: "Bill Medley",
  },
};

calculatePayout(song);
printSong(song);

type Point = {
  x: number;
  y: number;
  z?: number; //optional
};

const x: Point = { x: 1, y: 2, z: 3 }; //allowed.
const xx: Point = { x: 1, y: 3 }; //allowed - z is optional.

type User = {
  readonly id: number; //can't reassing.
  username: string;
};

const user: User = {
  id: 12837,
  username: "shubham",
};

console.log(user.id); //allowed.
// user.id = 5; //not-allowed.

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful; //intersection type.
const happyFace: ColorfulCircle = { radius: 2, color: "red" }; //not-allowed.
// const sadFace: ColorfulCircle = { radius: 2 }; //not-allowed.
