class Player {
  private readonly first: string;
  private readonly last: string;
  public score = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }

  public publicMethod(): void {
    console.log("Public!");
  }

  private privateMethod(): void {
    console.log("Private!");
  }
}

const elton = new Player("Elton", "Steele");
// elton.first // not allowed.
elton.score; //allowed.
elton.publicMethod(); //allowed.
// elton.privateMethod(); //not allowed.
