const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', (message) => {
    if(message.content.startsWith('$' + 'ball')) {
answer = ["Да!", "Нет!", "Возможно..", "Не-а.", "Частично.."];
message.channel.send(answer[Math.floor(Math.random() * answer.length)]);
    
    }
});
    client.login('Njc2NzE0NzgxNTUzNTkwMjcz.Xk0i8g.oMYJXA7D0sdtfMTBV7ptsCpETyo');