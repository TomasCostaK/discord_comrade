const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NzMwMDA2NjMxMDkzMzcwOTYy.XwRaZQ.AZfeMStkn5OUcwvQAM7mfwQj4TI';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

    //Cruz initial meme
  if (msg.content.includes('cruz')) {
    msg.reply('Ele não pode, está a jogar FiveM!');
  }

  //TumTumTum
  if (msg.content.includes('tumtumtum')) {
    msg.reply('Oh, tou mesmo a ver que vai ser a mesma merda, vocês nunca marcam nada');
  }

  //Se a resposta vier do chico ou indiano
  if(msg.author.tag === 'AceDestiny#3990') {
    msg.reply('Que chico, vai brincar..');
  }
  else if (msg.author.tag === 'AceDestiny#3990') {
    msg.reply('Cala-te, gualzito');
  }

  else if (msg.author.tag === 'joaocarvalho#9773') {
    msg.reply('Tá calado Indiano');
  }

});


  
client.login(token);