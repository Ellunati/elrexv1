const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "683752128644251660") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Ellunati#4909 Bana Ulaşın```')

}



 if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(`Ne yazık ki bu komutu kullanmaya yetkin yok.`);
   let kanal = await db.fetch(`svlog_${message.guild.id}`)
  let xp = await db.fetch(`verilecekxp_${message.guild.id}`)
  let hm = await db.fetch(`seviyeacik_${message.guild.id}`)
    let seviyerol = await db.fetch(`svrol_${message.guild.id}`)
  let rollvl = await db.fetch(`rollevel_${message.guild.id}`)
   if(!hm) return message.reply(':x: Bu tuhaf! aktif edilmeyen bir seviye sistemine xp değeri eklemeyi düşünmedin umarım? \n Bunu Deniyebilirsin: `el!seviye-aç`')
  let kanals = message.mentions.channels.first()
  if(!kanals) return message.channel.send(':x: Kanal ayarlamam için bir kanal belirtmen gerekiyor. \n Örnek: `el!seviye-log #level-log`')
  
    let kontrol2;
  if(xp == null) kontrol2 = '4 (Varsayılan)'
  else kontrol2 = xp
  
    
  let kontrol3;
  if(seviyerol == null) kontrol3 = 'Seviye Rol Sistemi Aktif Değil! :x:'
  else kontrol3 = seviyerol
  
  let codeming = new Discord.MessageEmbed()
  .setTitle('İşlem Başarılı!')
  .setDescription('Seviye logs kanalı ayarlandı.Üyeler seviye atlayınca orda belirteceğim.')
  .addField('Seviye Log Kanalı:', kanals, true)
  .addField('Mesaj Başı Verilecek XP:', kontrol2, true)
  .addField('Seviye Rol:', kontrol3)
  .setFooter('Ellunati Seviye Sistemi')
  .setColor('RANDOM')
  message.channel.send(codeming)
  
  db.set(`svlog_${message.guild.id}`, kanals)

  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'seviye-log',
  description: 'taslak', 
  usage: 'seviye-log'
};