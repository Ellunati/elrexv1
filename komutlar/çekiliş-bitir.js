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

    if(!args[0]){
        return message.channel.send('<a:onayland:756787666116280380> bir çekiliş kimliği **belirtmelisin!**');
    }

    let giveaway = 
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    if(!giveaway){
        return message.channel.send('<a:onayland:756787666116280380> sunucuda böyle bir çekiliş **bulunmuyor!** `'+ args.join(' ') + '`.');
    }

    client.giveawaysManager.edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
    })
    .then(() => {
        message.channel.send('<a:onayland:756787666116280380> çekiliş kısa sürede bitecek '+(client.giveawaysManager.options.updateCountdownEvery/1000)+' saniye...').then(a => a.delete({timeout: 10000}));
    })
    .catch((e) => {
        if(e.startsWith(`:x: bu ID çekiliş kimliği ${giveaway.messageID} zaten bitti.`)){
            message.channel.send('<a:onayland:756787666116280380> Bu çekiliş çoktan sona erdi!');
        } else {
            console.error(e);
            message.channel.send('<a:carpi:736642156969852959> Bir hata oluştu...');
        }
    });

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gend','g-end'],
  permLevel: 0
};

exports.help = {
  name: 'çekiliş-bitir',
  description: 'çekiliş',
  usage: 'çekiliş-bitir'
};