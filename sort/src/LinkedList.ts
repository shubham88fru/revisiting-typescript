import { Sortable } from "./Sortable";

class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList implements Sortable {
  head: Node | null = null;

  add(data: number): void {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = newNode;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error("Index out of bounds");
    }

    let curr: Node | null = this.head;
    while (index > 0) {
      if (!curr) {
        throw new Error("Index out of bounds");
      }

      curr = curr.next;
      index -= 1;
    }

    if (!curr) throw new Error("Index out of bounds");
    return curr;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let curr: Node | null = this.head;
    let length = 0;

    while (curr) {
      length += 1;
      curr = curr.next;
    }

    return length;
  }

  compare(li: number, ri: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }

    return this.at(li).data > this.at(ri).data;
  }

  swap(li: number, ri: number): void {
    const leftNode = this.at(li);
    const rightNode = this.at(ri);

    const temp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let curr: Node | null = this.head;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}
