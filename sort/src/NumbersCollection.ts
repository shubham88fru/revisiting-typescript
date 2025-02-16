import { Sortable } from "./Sortable";
import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter implements Sortable {
  constructor(public data: number[]) {
    super();
  }

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
