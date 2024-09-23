namespace App {
  export abstract class Component<
    T extends HTMLElement,
    U extends HTMLElement
  > {
    templateEl: HTMLTemplateElement;
    hostElement: T;
    element: U;

    constructor(
      templateId: string,
      hostElmentId: string,
      insertAtStart: boolean,
      newElementId?: string
    ) {
      this.templateEl = document.getElementById(
        templateId
      )! as HTMLTemplateElement;
      this.hostElement = document.getElementById(hostElmentId)! as T;

      const importedNode = document.importNode(this.templateEl.content, true);
      this.element = importedNode.firstElementChild as U;
      if (newElementId) this.element.id = newElementId;

      this.attach(insertAtStart);
    }

    private attach(insertAtStart: boolean) {
      this.hostElement.insertAdjacentElement(
        insertAtStart ? "afterbegin" : "beforeend",
        this.element
      );
    }

    abstract configure(): void;
    abstract renderContent(): void;
  }
}
