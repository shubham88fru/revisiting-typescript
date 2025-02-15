import { Sortable } from "./Sortable";

export class NumbersCollection implements Sortable {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  compare(li: number, ri: number): boolean {
    return this.data[li] > this.data[ri]; //left is greater than right
  }

  swap(li: number, ri: number): void {
    const temp = this.data[li];
    this.data[li] = this.data[ri];
    this.data[ri] = temp;
  }
}
