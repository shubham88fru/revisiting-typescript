export abstract class Sorter {
  abstract get length(): number;
  abstract compare(li: number, ri: number): boolean;
  abstract swap(li: number, ri: number): void;

  sort(): void {
    for (let i = 0; i < this.length; i++) {
      for (let j = 1; j < this.length - i; j++) {
        if (this.compare(j - 1, j)) {
          this.swap(j - 1, j);
        }
      }
    }
  }
}
