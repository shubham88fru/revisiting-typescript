const person = {
  name: "Shubham",
  age: 28,
};

enum ManagementLevel {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person1: object = {
  name: "Shubham",
  age: 28,
  level: ManagementLevel.ADMIN,
};

const person2: {
  name: string;
  age: number;
  hobbies: string[]; //an array
  role: [number, string]; //a tuple -- fixed length array and fixed type for each position.
} = {
  name: "Shubham",
  age: 28,
  hobbies: ["sport", "cooking"],
  role: [2, "author"],
};

let favoriteActivities: string[];

console.log(person);
