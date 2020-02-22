const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', (message) => {
if (message.content == "$" + "ping") {
    message.channel.send("Pong! `" + Math.floor(Math.round(client.ping)) + "`ms");

    message.delete();
    }})

client.login('Njc2NzE0NzgxNTUzNTkwMjcz.Xk0i8g.oMYJXA7D0sdtfMTBV7ptsCpETyo');