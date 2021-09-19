const Discord = require('discord.js');
const db = require('quick.db')
const { createCanvas, loadImage} = require('canvas');

exports.run = (client, message, params) => {

  if(db.fetch(`bakimmod`)) {

    if(message.author.id !== "683752128644251660") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Ellunati#4909 Bana Ulaşın```')
  
  }

  let kanal =  db.fetch(`svlog_${message.guild.id}`)
  let xp =  db.fetch(`verilecekxp_${message.guild.id}`)
  let seviyerol =  db.fetch(`svrol_${message.guild.id}`)
  let rollvl =  db.fetch(`rollevel_${message.guild.id}`)
  let kxp = db.fetch(`xp_${message.author.id}_${message.guild.id}`)
  let klvl = db.fetch(`lvl_${message.author.id}_${message.guild.id}`)
  var user = message.mentions.users.first() || message.author;
  
  let kontrol;
  if(klvl == null) kontrol = '1'
  else kontrol = kxp
  
  let kontrol2;
  if(klvl == null) kontrol2 = '1'
  else kontrol2 = klvl



  const embed = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle('Level !')
.setDescription(`**${message.author.tag}** 
LEVEL: \`${klvl}\`
XP: \`${kxp}\`
VR XP: \`${xp}\``)
message.channel.send(embed)

    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'xp',
  description: 'xp ne falan bakarsın muk',
  usage: 'el!xp'
};
