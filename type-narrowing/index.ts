function triple(value: number | string) {
  if (typeof value === "string") {
    // value is narrowed to string
    return value.repeat(3);
  } else {
    // value is narrowed to number
    return value * 3;
  }
}

console.log(triple(3)); // 9
console.log(triple("3")); // "333"
