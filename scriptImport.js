import * as game from './library1.js';

game.default();
game.playGuitar();
game.playLudo();

// Display the game in the HTML document
document.getElementById('ModuleDiv').innerHTML = `<b>You like to play:</b> ` +game.printGame("Video Game");