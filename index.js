const Discord = require('discord.js');
const client = new Discord.Client();
var fs = require('fs');
const config = require('./config.json');

function makeid(length) {
  var result           = '';
  var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

//This function will be called at the start, so we load to an array all the free games available and then make a random choice
const arrayFreeGames = []
function loadFreeGames() {
  var parse = require('csv-parse')
  fs.readFile('steamdb/steamdb.csv', function (err, fileData) {
    parse(fileData, {columns: false, trim: true}, function(err, rows) {
      // Your CSV data is in an array of arrys passed to this callback as rows.
      for (let index = 1; index < rows.length; index++) {
        const element = rows[index];
        if(element[1] == 'Free to Play'){
          arrayFreeGames.push(element[0])
        }
      }
    })
  })
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  loadFreeGames()
});

client.on('message', msg => {
    //Cruz initial meme
  if (msg.content.includes('--random')) {
    let rep = 'https://prnt.sc/p'+makeid(5);
    msg.reply(rep);
  }

  if (msg.content.includes('--token')) {
    msg.reply(token);
  }

  //Choose a free game from the ones we've loaded at node start
  if (msg.content.includes('--free')) {
    var item = arrayFreeGames[Math.floor(Math.random() * arrayFreeGames.length)];

    let rep = 'https://store.steampowered.com/app/'+item;
    msg.reply(rep);
  }

  if (msg.content.toLowerCase().includes('maria rodrigues')) {
    msg.reply('https://prnt.sc/tdlp5v');
  }

});

client.login(config.token)