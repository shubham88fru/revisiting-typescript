class Player {
  private readonly first: string;
  private readonly last: string;
  public score = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const elton = new Player("Elton", "Steele");
