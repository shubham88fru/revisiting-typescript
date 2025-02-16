import { Sortable } from "./Sortable";

export class CharactersCollection implements Sortable {
  constructor(public data: string) {}

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
