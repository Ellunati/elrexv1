const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "683752128644251660") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Ellunati#4909 Bana Ulaşın```')

}

  if (!args[0]) return message.channel.send('Hey Bu Ayarı Kullanabilmek için `aç` yada `kapat` yazmalısın!')
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` yetkisine sahip olmalısın!')
  
  if (args[0] == 'aç') {
    var i = await db.set(`küfür_${message.guild.id}`, 'acik')
   
      message.channel.send('Küfür Engel başarıyla açıldı! `Üyeleri Yasakla` yetkisine sahip olanların küfür engellenmiyecektir.')
    }
  
  if (args[0] == 'kapat') {
    var i = await db.set (`küfür_${message.guild.id}`, 'kapali')
      message.channel.send('Küfür Engel başarıyla kapatıldı! Artık herkes küfür yapabilir.')
    }
  

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['küfr','küfür', 'küfür-engel'],
  permLevel: 0
};

exports.help = {
  name: 'küfürengel',
  description: '[Admin Komutu]',
  usage: 'küfürengel'
};