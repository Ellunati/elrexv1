const ms = require('ms');
const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (client, message, args) => {

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "683752128644251660") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Ellunati#4909 Bana Ulaşın```')

}


 if(!message.member.permissions.has('ADMINISTRATOR')) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
    message.channel.send(embed);
    return;
  }

let messageID = args[0]
    if(!messageID){
        return message.channel.send(' bir çekiliş kimliği **belirtmelisin!**');
    }
client.giveawaysManager.reroll(messageID, {
    messages: {
        congrat: ":tada: Yeni kazanan(lar): {winners}! Tebrikler!",
        error: "Geçerli katılım yok, kazanan seçilemez!"
                    }   
}).catch((err) => {
    message.channel.send("`"+ messageID +"` için çekiliş bulamadım, lütfen kontrol edin ve tekrar deneyin");
})
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['g-reroll', 'reroll'],
  permLevel: 0
};

exports.help = {
  name: 'çekiliş-yenile',
  description: 'çekiliş',
  usage: 'çekiliş-tekrar'
};