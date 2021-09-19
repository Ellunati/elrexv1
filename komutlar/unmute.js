const Discord = require('discord.js');
const client = new Discord.Client(); 
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

exports.run = async (client, message, args) => {

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "683752128644251660") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Ellunati#4909 Bana Ulaşın```')

}


  let p = db.fetch(`prefix_${message.guild.id}`)
  let prefix = ayarlar.prefix;
  if (p) prefix = p;
  message.channel.startTyping() 

    let kisi = message.mentions.members.first();
         const hataembed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .addField('HATA:', 'Lütfen mutesi kaldırılacak bir kişi belirtin!')
      if(!kisi) return message.channel.send(hataembed)
      
      let muterol = db.fetch(`muterol_${message.guild.id}`);
      if(!muterol) {
        message.channel.send(`Lütfen bir muteli rol ayarlayın. Ayarlamak için ${prefix}muterol, yeni oluşturmak için ${prefix}muterololuştur`)
      }
    const embed5 = new Discord.MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .addField('HATA:', 'Kişinin Mutesi Yok!')



      
  //  if (!kisi.roles.has(muterol.id)) return message.channel.send(embed5);

  

         let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Sebep Belirtilmemiş';
    kisi.roles.remove(muterol);
   let muted = db.fetch(`muteli_${message.guild.id + kisi.id}`);
   if (muted) {
    db.delete(`muteli_${message.guild.id + kisi.id}`);
   }
  
  const embed = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Mute Kaldırıldı')
    .addField('Kullanıcı:', `${kisi} (${kisi.id})`)
    .addField('Yetkili:', `${message.author} (${message.author.id})`)
    .addField('Sebep', reason);
      message.channel.send(embed);
  const modlog = db.fetch(`modlogKK_${message.guild.id}`)
  if (!modlog) return message.reply('Mod log kanalı ayarlamamışsınız.');
  return message.guild.channels.cache.get(modlog).send(embed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2,
        kategori: "Yetkili"
 
  };
 
  exports.help = {
    name: 'unmute',
    description: 'İstediğiniz kişinin banını kaldırır.',
    usage: 'unmute [kullanıcı]'
  };