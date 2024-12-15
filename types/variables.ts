/* string */
let movieTitle: string = "The Wolverine";
movieTitle = "Jason Bourne"; //allowed
// movieTitle = 5; //not allowed.

/* number */
let numCatLives: number = 9;

/* boolean */
let gameOver: boolean = false;

/* any */
let myComplicatedData: any = "Random data";
myComplicatedData = "Another"; //allowed.
myComplicatedData = false; //allowed.
myComplicatedData.method(); //allowed.

/* Type inference */
let tvShow = "Olive Kitterege"; //type 'string' infered.
tvShow = "Young Sheldon"; // allowed.
// tvShow = false; //not allowed.
let found; //type 'any' infered.
