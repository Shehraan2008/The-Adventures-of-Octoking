class Form {
  // Creating new DOM Elements for instruction
  // title, greeting, buttons and inputs.
  constructor() {
    this.title = createElement("h1", "The Adventures of Octoking");
    this.subtitle = createElement(
      "h2",
      "A Turn Based Game by Quiet Slug from Beige Land."
    );
    this.greeting = createElement("h2");
    this.userName = createInput("Nick Name");
    this.startGame = createButton("Enter World");
  }

  // Positoning the Elements
  display() {}
}
