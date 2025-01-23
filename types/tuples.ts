let color: [number, number, number] = [255, 0, 0]; //tuple.
// color = ['255', 0, 0]; //not allowed.
let random: [string, number];
random = ["hello", 10]; //allowed.
// random = [10, 'hello']; //not allowed.

type Res = [number, string];
let goodRes: Res = [200, "OK"]; //allowed.
// let goodRes = ['OK', 200]; //not allowed.

const responses: Res[] = [
  [200, "OK"],
  [404, "Not Found"],
]; //allowed.
