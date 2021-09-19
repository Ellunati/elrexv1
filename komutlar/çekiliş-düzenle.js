const Discord = require('discord.js');
const db = require("quick.db")
const ms = require('ms');
exports.run = async (award, message, args) => {


let elrex = await db.fetch(`premod_${message.guild.id}`)
if (!elrex) return message.channel.send("Bu sunucuda **premium mod aktif değil**, bu sebepten dolayı Sunucu Tanıt Komutunu kullanamazsınız.")

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "683752128644251660") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Ellunati#4909 Bana Ulaşın```')

}
   
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send("Yetersiz yetki");
            return;
          }
    
    let gweep = args[0];
    let kazanan = args[1];
    let odul = args[2];
    let zaman = args[3];
    if(!gweep) return message.channel.send("Lütfen geçerli bir **mesaj id** girin! (Kullanım: <MesajID> <Kazanancak Sayı> <Ödel> <zaman)")
    if(!kazanan) return message.channel.send("Geçerli bir **kazanan miktarı** sağlamadınız! (Kullanım: <MesajID> <Kazanacak Sayı> <Ödül> <Zaman>)")
    if(!odul) return message.channel.send("Geçerli Bir **ödül** girin! (Kullanım: <MesajID> <Kazanacak Sayı> <Prize> <Zaman>)")
    if(!ms(zaman) && zaman) return message.channel.send("Geçerli bir **zaman** girin! (Kullanım: <MesajID> <Kazanacak Sayı> <Ödül> <Zaman>)")
            award.giveawaysManager.edit(gweep, {
                newWinnerCount: kazanan,
                newPrize: odul,
                addTime: ms(zaman)
            }).then(() => {
                message.channel.send("Başarılı! Eşantiyon düzenlendi!");
            }).catch((err) => {
                message.channel.send("Bu hediyeyi bulamadım.");
            });
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gedit', 'g-edit'],
  permLevel: 0,
};

exports.help = {
  name: 'çekiliş-düzenle',
  description: '',
  usage: ''
};