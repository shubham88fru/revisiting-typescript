///<reference path="./base-component.ts" />
///<reference path="../decorators/autobind.ts" />
///<reference path="../util/validation.ts" />
///<reference path="../state/project.ts" />

namespace App {
  export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
    titleInputEl: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
      super("project-input", "app", true, "user-input");
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
    }

    private gatherUserInput(): [string, string, number] | void {
      //returns a tuple or nothing

      const enteredTitle = this.titleInputEl.value;
      const enteredDescription = this.descriptionInputElement.value;
      const enteredPeople = this.peopleInputElement.value;

      const titleValidatable: Validatable = {
        value: enteredTitle,
        required: true,
      };

      const descriptionValidatable: Validatable = {
        value: enteredDescription,
        required: true,
        minLength: 5,
      };

      const peopleValidatable: Validatable = {
        value: enteredTitle,
        required: true,
        min: 1,
        max: 5,
      };

      if (
        !validate(titleValidatable) ||
        !validate(descriptionValidatable) ||
        !validate(peopleValidatable)
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
        projectState.addProject(title, desc, people);
        this.clearInput();
      }
    }

    configure() {
      this.element.addEventListener("submit", this.submitHandler); //no need to bind, coz using decorator.
    }

    renderContent(): void {}
  }
}
