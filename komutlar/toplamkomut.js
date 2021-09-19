const Discord = require('discord.js')
const db = require('quick.db')

exports.run = function(client, message, args) {

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "683752128644251660") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Ellunati#4909 Bana Ulaşın```')

}

const embed = new Discord.MessageEmbed()
.setTimestamp()
.setFooter(`${message.author.tag} Tarafından İstendi.`)
.addField(`Botta Bulunan Toplam Komut Sayısı`,`${client.commands.size}`)
  message.channel.send(embed)
  
  
};
exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ["toplam-komut","komut-sayısı","komutsayısı", "tpkm"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'toplamkomut'
  };