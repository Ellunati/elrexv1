const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message) => {

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "683752128644251660") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Ellunati#4909 Bana Ulaşın```')

}

  const Embed = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle(
      "** ©️ **»Ellunati Oy Verme Menüsü ©️")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/795410840873992223/795413480693432330/Oygecis-anagorsel4-k.jpg"
    )
    .setDescription(
      `

**» Bağlantılar** 
**[OyVer](https://top.gg/bot/802833358065369098)** **•** **[Sitemiz](https://ellunati.glitch.me/)**
`
    )

    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();

  return message.channel.send(Embed).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "oyver",
  description: "Botun Komut Listesini Gösterir!",
  usage: "el!oyver"
};


