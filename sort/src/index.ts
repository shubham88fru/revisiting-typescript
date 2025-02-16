import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter1 = new Sorter(numbersCollection);
sorter1.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("Xaayb");
const sorter2 = new Sorter(charactersCollection);
sorter2.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(1000);
const sorter3 = new Sorter(linkedList);
sorter3.sort();
linkedList.print();
