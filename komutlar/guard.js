const Discord = require('discord.js');
const talkedRecently = new Set();
let botid = ('790161653508603914')

exports.run = (client, message, args) => {
                         if (talkedRecently.has(message.author.id)) {
           return message.reply("``Komutu 5 Saniye Aralıklarla Kullanabilirsin.``");
    } else {

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 5000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }
    const embed = new Discord.MessageEmbed()
  .setColor('#3498db')
.addField('**Elrex Guard Komutları**',`
**\n el!koruma-ayarlar : Aayarlarınızı gösterir.**
**\n el!caps-engel aç : Büyük harf koruma sistemini açarsınız.**
**\n el!caps-engel kapat : Büyük harf koruma sistemini kapatırsınız.**
**\n el!mod-log #kanal : Mod log kanalını belirlersiniz.**
**\n el!rol-koruma aç : Rol-koruma açarsınız.**
**\n el!rol-koruma kapat : Rol-koruma kapatırsınız.**
**\n el!kanal-koruma aç : Kanal korumasını açarsınız.**
**\n el!kanal-koruma kapat : Kanal koruma kapatırsınız.**
**\n el!reklam-engel aç : Reklam engel korumasını açarsınız.**
**\n el!reklam-engel kapat : Reklam engel korumasını kapatırsınız.**
**\n el!küfür-engel aç : Küfür engel açarsınız.**
**\n el!küfür-engel kapat : Küfür engel kapatırsınız.**
**\n el!ping : Botun pingini görürsünüz..**
 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`)
.setImage("https://cdn.discordapp.com/attachments/788673281455685653/810117778613731328/standard.gif")
    .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.addField("**➥ Linkler**", "[:exclamation:  Davet Linkim](https://discord.com/oauth2/authorize?client_id=802833358065369098&scope=bot&permissions=8)\n\n[:exclamation:  Destek Sunucum](https://discord.gg/QjSEtxVU5m)\n\n[:exclamation:  Websitem](https://elrexsupport.glitch.me//)")
    message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'guard',
  description: 'Premium guard.',
  usage: 'premium'
};