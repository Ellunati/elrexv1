const Discord = require('discord.js');
const db = require('quick.db')
const { createCanvas, loadImage} = require('canvas');
exports.run = async(client, message, args) => { 
  

  if(db.fetch(`bakimmod`)) {

    if(message.author.id !== "683752128644251660") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Ellunati#4909 Bana Ulaşın```')
  
  }


   let hm = await db.fetch(`seviyeacik_${message.guild.id}`)

  let kanal = await db.fetch(`svlog_${message.guild.id}`)
  let xp = await db.fetch(`verilecekxp_${message.guild.id}`)
  let seviyerol = await db.fetch(`svrol_${message.guild.id}`)
  let rollvl = await db.fetch(`rollevel_${message.guild.id}`)
  let kxp = await db.fetch(`xp_${message.author.id}_${message.guild.id}`)
  let klvl = await db.fetch(`lvl_${message.author.id}_${message.guild.id}`)
  if(!hm) return message.channel.send(':x: Seviye komutları aktif değil Veya Teknik Bir Arıza Var \n `el!seviye-aç el!seviye-rol el!seviye-log el!seviye-xp el!seviye-ayarlar el!seviye-kapat`')
  var user = message.mentions.users.first() || message.author;
  
  let kontrol;
  if(klvl == null) kontrol = '1'
  else kontrol = kxp
  
  let kontrol2;
  if(klvl == null) kontrol2 = '1'
  else kontrol2 = klvl

  let totalxp = await db.fetch(`totalxp_${message.author.id}_${message.guild.id}`)
  if(totalxp === undefined) totalxp = "300"
  if(totalxp === null) totalxp = "99999"

const canvas = createCanvas(1000,333);
const ctx = canvas.getContext("2d")
const background = await loadImage("https://cdn.discordapp.com/attachments/820385104379641937/821686623590809600/1280x720_green-background-spots.jpg");
ctx.drawImage(background, 0, 0, canvas.width, canvas.height)  
  
ctx.lineWidth = 4;
ctx.strokeStyle = "#ffffff";
ctx.globalAlpha = 0.2;
ctx.fillStyle = "#000000";
ctx.fillRect(180, 216, 770, 65);
ctx.fill(); 
ctx.globalAlpha = 1;
ctx.strokeRect(180, 216, 770, 65);
ctx.stroke();

ctx.fillStyle = "#00d4ff";
ctx.globalAlpha = 0.6;
ctx.fillRect(180, 216, ((100 / (kxp)) * xp) * 7.7, 65);// level* 40
ctx.fill();
ctx.globalAlpha = 1;

ctx.font = "30px Arial";
ctx.textAlign = "center";  
ctx.fillStyle = "#ffffff";  
ctx.fillText(`${kxp} XP`, 600, 260);// level* 40

ctx.textAlign = "left";
ctx.fillText(message.author.tag, 300, 120);
ctx.font = "50px Arial";
ctx.fillText("Level:", 300, 180);  
ctx.fillText(klvl, 450, 180);// level, 470 olacak 
  
ctx.arc(170, 160, 120, 0, Math.PI * 2, true);
ctx.lineWidth = 6;
ctx.strokeStyle = "#ffffff";
ctx.stroke();
ctx.closePath();
ctx.clip();
  
const avatar = await loadImage(message.author.displayAvatarURL({ format: "jpg"}))  
ctx.drawImage(avatar, 40, 40, 250, 250);
  
  const embed = new Discord.MessageEmbed()
const final = new Discord.MessageAttachment(canvas.toBuffer(), "rank.jpg")  
message.channel.send(final)
  
}
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'seviye',
  description: 'taslak', 
  usage: 'seviye'
};