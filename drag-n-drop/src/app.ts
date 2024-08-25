//autobind decorator
function autobind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjustedDescriptor;
}

class ProjectInput {
  templateEl: HTMLTemplateElement;
  hostElememnt: HTMLDivElement;
  element: HTMLFormElement;
  titleInputEl: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateEl = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElememnt = document.getElementById("app")! as HTMLDivElement;

    const importedNode = document.importNode(this.templateEl.content, true);
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";

    this.titleInputEl = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;

    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;

    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private gatherUserInput(): [string, string, number] | void {
    //returns a tuple or nothing

    const enteredTitle = this.titleInputEl.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    if (
      enteredTitle.trim().length == 0 ||
      enteredDescription.trim().length == 0 ||
      enteredPeople.trim().length == 0
    ) {
      alert("Invalid input, please try again!");
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  private clearInput() {
    this.titleInputEl.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      console.log(title, desc, people);
      this.clearInput();
    }
  }

  private configure() {
    // this.element.addEventListener("submit", this.submitHandler.bind(this));
    this.element.addEventListener("submit", this.submitHandler); //no need to bind, coz using decorator.
  }

  private attach() {
    this.hostElememnt.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjInput = new ProjectInput();
