import { Sortable } from "./Sortable";
import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter implements Sortable {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(li: number, ri: number): boolean {
    return this.data[li].toLowerCase() > this.data[ri].toLowerCase();
  }

  swap(li: number, ri: number): void {
    const characters = this.data.split("");
    const temp = characters[li];
    characters[li] = characters[ri];
    characters[ri] = temp;

    this.data = characters.join("");
  }
}
