const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "683752128644251660") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Ellunati#4909 Bana Ulaşın```')

}

  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`❌ Bu Komutu Kullana Bilmek İçin \`Sunucuyu Yönet\` Yetkisine Sahip Olmalısın!`)
  
  let capslock = await db.fetch(`capslock_${message.guild.id}`)
  if (capslock) {
    db.delete(`capslock_${message.guild.id}`, 'kapali')
    message.channel.send(`Capslock Engelleme Sistemi Kapatıldı <a:tk:705091908040392756>`)
  }
 
  if (!capslock) {
    db.set(`capslock_${message.guild.id}`, 'acik')
    message.channel.send(`Capslock Engelleme Sistemi Aktif <a:tk:705091908040392756>`)
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['capslockengel','capslock','capslock-engel','cl'],
  permLevel: 3
};
exports.help = {
  name: 'capsengel',
  category: 'Moderasyon komutları!',
  description: 'Capslock kullanımını engeller.',
  usage: 'capslock-engelleme'
};