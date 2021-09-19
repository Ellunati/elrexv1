const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const db = require("quick.db");

const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {

  if(db.fetch(`bakimmod`)) {

    if(message.author.id !== "683752128644251660") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Ellunati#4909 Bana Ulaşın```')
  
  }

  if (talkedRecently.has(message.author.id)) {
    message.channel.send("Biraz Daha Yavaş Olurmusun Aksi Takdirde Ceza Alırsın ! " + message.author);
} else {


talkedRecently.add(message.author.id);
setTimeout(() => {
  talkedRecently.delete(message.author.id);
}, 43200000);
}

let user = message.author.username;
let guild = message.guild;
let channel = bot.channels.cache.get("888509200760705074");
let invite = await message.channel.createInvite({
    maxAge: 0,
    maxUses: 0
  });
let embed = new Discord.MessageEmbed()
.setTitle("Bir Sunucu Tanıtıldı")
.addField("Sunucuyu Tanıtan Kişi", user, true)
.addField("Sunucu Adı", guild.name, true)
.addField(`Sunucu Davet Linki`, `https://discord.gg/${invite.code}`)
.setColor("#f49542")

message.channel.send(":white_check_mark:  **| Sunucunu başarıyla destek sunucumda tanıttım.**")
channel.send(embed)

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'sunucu-tanıt'
}