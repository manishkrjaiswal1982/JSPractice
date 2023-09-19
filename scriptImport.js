import * as game from './library1.js';

game.default();
game.playGuitar();
game.playLudo();
game.fetchJSONdata();
game.fetchTxtData();
game.fetchJSONData2();

// Display the game in the HTML document
document.getElementById('ModuleDiv').innerHTML = `<b>You like to play:</b> ` +game.printGame("Video Game");