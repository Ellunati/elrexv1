const Discord = require('discord.js');
const funnyWords = require("funny-words");
const db = require("quick.db");


exports.run = async (client, message, args) => {

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "683752128644251660") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Ellunati#4909 Bana Ulaşın```')

}

if(!message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`İkram edeceğin istediğin kişiyi etiketlemelisin.`)).then(a => a.delete({timeout: 10000}))

var gifler = [
  "https://cdn.discordapp.com/attachments/804676569531678760/810214109587963974/tenor_3.gif"


];
let resimler = gifler[Math.floor(Math.random() * gifler.length)];
if(message.author.id === message.mentions.members.first().id) return message.channel.send(new Discord.MessageEmbed().setColor('#00567e').setTitle('Dur Orda!').setDescription('Aç gözlü olma oğlum ikram ediceksin.')).then(a => a.delete({timeout: 10000}))
message.channel.send(`> ${message.author} ${message.mentions.members.first()} **Kişisine Çay İkram Ediyor Fiyüüğp**`, new Discord.MessageAttachment(resimler));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["çay","çay-ikram","çayikramet","çayikram"],
  permLevel: 0
};

exports.help = {
  name: 'çay-ikram-et'
};