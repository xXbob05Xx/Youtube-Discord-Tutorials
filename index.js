const Discord = require('discord.js');
const { Client, Attachment, MessageEmbed } = ('discord.js');
const bot = new Discord.Client();
const keepAlive = require('./host.js')
const config = require('./config.json')

// When Successflly Logged
bot.on('ready', () => {
    console.log(`Successflly logged to ${bot.user.tag}`)
})

//First Command
bot.on('message', async (message) => {
  
  if (message.author.bot) return;
  if (!message.channel.type === 'dm') return;

  let args = message.content.substring(config.PREFIX.length).split(' ');

  const command = message.content.toLowerCase();

  if (command.match(`${config.PREFIX}ping`)) {

    message.channel.send(`Pong!`)

  }
})

// now is hosted 24/24!

keepAlive();

bot.login(process.env.TOKEN) // Bot Login