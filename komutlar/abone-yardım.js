const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => { 

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "683752128644251660") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Ellunati#4909 Bana Ulaşın```')

}

let prefix = 'el!'
let yardım = new Discord.MessageEmbed()  
.setColor('RANDOM')
.addField('ELREX Abone Rol Menüsü',`
🔔 **${prefix}abone-yetkili-rol** : Abone Yetkilisini Seçer.
🔔 **${prefix}abone-rol** : Vericeğiniz Rolü ayarlarsınız.
🔔 **${prefix}abone-log** : Log mesajınn gitceği yer seçilir.
🔔 **${prefix}abone** : Abone Rolü verme komutudur.`)
  .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=787328444954050570&permissions=8&scope=bot)", )
    .setImage("https://cdn.discordapp.com/attachments/788673281455685653/810117778613731328/standard.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-komut'],
  permLevel: 0
};

exports.help = {
  name: "abone-yardım",
  category: "abone-yardım",
    description: "Eğlence Komutları Gösterir."
};