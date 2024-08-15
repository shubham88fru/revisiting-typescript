class Department {
  public name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Technology");
accounting.describe();
console.log(accounting);

//interface.
interface Person {
  name: string;
  age: number;
  sex?: string; //optional property.

  greet(phrase: string): void;
}

let user1: Person;
user1 = {
  name: "Max",
  age: 30,
  greet(phrase: string) {
    console.log("Hi");
  },
};

//interface as a function type.
interface AddFn {
  (a: number, b: number): number; //function signature.
}

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};
