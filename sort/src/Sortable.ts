export interface Sortable {
  length: number;
  compare(li: number, ri: number): boolean;
  swap(li: number, ri: number): void;
}
