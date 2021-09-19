const Discord = require('discord.js');
const ms = require('parse-ms');
const db = require('quick.db');

exports.run = async(client, message, args) => {

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "683752128644251660") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Ellunati#4909 Bana Ulaşın```')

}

  let okul = new Date('2022-01-01:00:00')
    let zaman = ms(okul - Date.now())
    message.channel.send(`Yılbaşının kutlanmasına **${zaman.days}** gün **${zaman.hours}** saat **${zaman.minutes}** dakika kaldı!`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yeniyıl',
  description: '',
usage: ""
};