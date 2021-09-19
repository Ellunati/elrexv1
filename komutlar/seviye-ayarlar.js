const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "683752128644251660") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Ellunati#4909 Bana Ulaşın```')

}
  


  
 let hm = await db.fetch(`seviyeacik_${message.guild.id}`)
  let kanal = await db.fetch(`svlog_${message.guild.id}`)
  let xp = await db.fetch(`verilecekxp_${message.guild.id}`)
  let seviyerol = await db.fetch(`svrol_${message.guild.id}`)
  let rollvl = await db.fetch(`rollevel_${message.guild.id}`)
  
  let kontrol;
  if(kanal == null) kontrol = ':x: Sunucuda Ayarlanmış Bir Log Bulunamadı!'
  else kontrol = kanal
  
  let kontrol2;
  if(xp == null) kontrol2 = '4 (Varsayılan)'
  else kontrol2 = xp
  
  let kontrol3;
  if(seviyerol == null) kontrol3 = ':x: Seviye Rol Sistemi Aktif Değil!'
  else kontrol3 = seviyerol
  
  let kontrol4;
  if(rollvl == null) kontrol4 = '<a:fiber_kirmizicarp:736571925471690824>'
  else kontrol4 = '<:evt:784341407489720340> | '+rollvl
  if(!hm) return message.channel.send('<a:alert:707993531834302505>Seviye sistemi bu sunucuda aktif durumda değil! \n `el!seviye-aç`')
  let ayarlar = new Discord.MessageEmbed()
  .setTitle('Sunucu Seviye Ayarları:')
  .setDescription(message.guild.name + ' Sunucusunun seviye ayarları!')
  .addField('Göstergeler', '  **<a:evt:784341407489720340> Aktif** \n   **<a:fiber_kirmizicarp:736571925471690824> Devre Dışı**')
  .addField('Seviye Logs Kanalı:', kontrol, true)
  .addField('Mesaj Başı Verilecek XP:', kontrol2, true)
  .addField('Seviye Rol', kontrol3, true)
  .addField('Seviye Rol Leveli:', kontrol4, true)
  .setFooter('Elrex Seviye Sistemi')
  message.channel.send(ayarlar)
 

 };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['seviyeayarlar', 'seviyeayar'], 
  permLevel: 0
};

exports.help = {
  name: 'seviye-ayarlar',
  description: 'taslak', 
  usage: 'seviye-ayarlar'
};