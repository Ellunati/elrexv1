const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "683752128644251660") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Ellunati#4909 Bana Ulaşın```')

}


if(await db.fetch(`slm.${message.author.id}.${message.guild.id}.aşk`)) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`**20 saniyenin altında hızlı kullanamazsın!**`));
if(!message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`Sevdiğin kişiyi etiketlemelisin.`)).then(a => a.delete({timeout: 10000}))
var gifler = ['12', '0', '4', '17', '24', '27', '29', '40', '37', '54', '67', '78', '74', '84', '81', '94', '93', '99', '101'];
let resimler = gifler[Math.floor(Math.random() * gifler.length)];

message.channel.send(new Discord.MessageEmbed().setTitle(`${message.author.username} \`&\` ${message.mentions.members.first().user.username}`).setThumbnail('https://media1.tenor.com/images/82e2feacd70235f610c2cb7548e0a9cd/tenor.gif')
.setDescription(`**Sevgilin ile aranda \`%${resimler}\` sevgin var.** 🥰`));
message.delete({timeout:10000});

db.set(`slm.${message.author.id}.${message.guild.id}.aşk`, 'Ellunati World');
setTimeout(() => {
db.delete(`slm.${message.author.id}.${message.guild.id}.aşk`)
}, 20000);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sevgi'
};