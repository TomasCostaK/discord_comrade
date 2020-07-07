const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NzMwMDA2NjMxMDkzMzcwOTYy.XwRaZQ.AZfeMStkn5OUcwvQAM7mfwQj4TI';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.includes('cruz')) {
    msg.reply('Ele não pode, está a jogar FiveM!');
  }
});

client.on('message', msg => {
    if (msg.content.includes('tumtumtum')) {
      msg.reply('Oh, tou mesmo a ver que vai ser a mesma merda, vocês nunca marcam nada');
    }
  });

client.login(token);