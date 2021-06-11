/* 
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
* Title : 
* Author : 
* URL : Description : Created : 
* Modified : 
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
*/
class Form {
  constructor() {
    this.title = createElement("h1", "The Adventures of Octoking");
    this.title.class("gameTitle");
    this.subtitle = createElement(
      "h2",
      "A Turn Based Game by Quiet Slug from Beige Land."
    );
    this.subtitle.class("gameSubTitle");
    this.userName = createInput("Nick Name");
    this.startGame = createButton("Enter World");
    this.startGame.class("nes-btn is-primary");
  }

  hide() {
    this.title.hide();
    this.subtitle.hide();
    this.userName.hide();
    this.startGame.hide();
  }

  display() {
    this.title.position(width / 4 - 400, height / 8);
    this.subtitle.position(width / 8, height / 3 + 100);
    this.userName.position(width / 3 + 70, height / 1.5);
    this.startGame.position(width / 3 + 120, height / 1.5 + 80);

    this.startGame.mousePressed(() => {
      form.hide();
      gameState = 1;
    });
  }
}
