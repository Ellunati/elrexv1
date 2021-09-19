const  Discord = require("discord.js"); 
const  db = require("quick.db"); 


exports.run = (client, message, args) => {

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "683752128644251660") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Ellunati#4909 Bana Ulaşın```')

}


  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle('Sosyal medyalar')
  .setDescription("[__**Takip et = Ellunati Youtube**__](https://www.youtube.com/channel/UC7d9_624SRIe9LdOj2IdNfw) \n [__**Takip et = Ellunati Twitch**__](https://www.twitch.tv/ellunati00)")
 .addField('``Code by Ellunati#2021``')  
message.channel.send(davet)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'medya',
  description: '',
  usage: ''
};