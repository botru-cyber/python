const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if(message.content.startsWith('$' + 'profile')) {
      const { Client, RichEmbed } = require('discord.js');
      const embed = new RichEmbed()
        .setTitle('Profile')
        .setColor(3447003)
        .setThumbnail('https://media.discordapp.net/attachments/610426384426467348/630368905470148618/9ac5562c06970e887bc8f99f169f6fc7-1-1.gif')
        .setDescription('**Ваш профиль**')      
        .addField('**Ваш аватар:**', message.author.avatarURL)
        .addField('**Ваше имя:**', message.author.username)
        .setFooter('by Auttaja#8551...')
        .setURL('https://discord.gg/tCauJnZ');
      message.channel.send(embed);
    }
  });

  client.login('Njc2NzE0NzgxNTUzNTkwMjcz.Xk0i8g.oMYJXA7D0sdtfMTBV7ptsCpETyo');