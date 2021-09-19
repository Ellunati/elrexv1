const ms = require('ms')
const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");

exports.run = async (client, message, args) => { 

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "683752128644251660") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Ellunati#4909 Bana Ulaşın```')

}

let prefix = ayarlar.prefix 
 if(!message.member.permissions.has('ADMINISTRATOR')) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
    message.channel.send(embed);
    return;
  }
    let giveawayChannel = message.mentions.channels.first();
    if(!giveawayChannel){
        return message.channel.send(` Lütfen bir **kanal süre**, **kazanan** ve **ödül** belirtin!\nÖrnek kullanım: \`${prefix}çekiliş-yap #kanal 1h 1 Nitro Classic\``);
    }

    let giveawayDuration = args[1];
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send(` Lütfen bir **kanal süre**, **kazanan** ve **ödül** belirtin!\nÖrnek kullanım: \`${prefix}çekiliş-yap #kanal 1h 1 Deneme\``);
    }

    let giveawayNumberWinners = args[2];
    if(isNaN(giveawayNumberWinners)){
        return message.channel.send(` Lütfen bir **kanal süre**, **kazanan** ve **ödül** belirtin!\nÖrnek kullanım: \`${prefix}çekiliş-yap #kanal 1h 1 Nitro Boost\``);
    }

    let giveawayPrize = args.slice(3).join(' ');
    if(!giveawayPrize){
        return message.channel.send(` Lütfen bir **kanal süre**, **kazanan** ve **ödül** belirtin!\nÖrnek kullanım: \`${prefix}çekiliş-yap #kanal 1h 1 spo premium\``);
    }

 client.giveawaysManager.start(giveawayChannel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayNumberWinners,
            hostedBy: message.author,
            messages: {
            giveaway: "**ÇEKİLİŞ**",
                giveawayEnded: "**ÇEKİLİŞ SONLANDI**",
                timeRemaining: "Kalan süre: **{duration}**!",
                inviteToParticipate: "🎉 emojisine basarak katıl!",
                winMessage: " Tebrikler, {winners}! **{prize}** ödülünü kazandınız!",
                embedFooter: "Çekiliş",
                noWinner: "bir kazanan belirlenemedi!",
                hostedBy: "Çekiliş Yapan: {user}",
                winners: "kazanan(lar)",
                endedAt: "Bitiş tarihi",
units: {
                    seconds: "Saniye",
                    minutes: "Dakika",
                    hours: "Saat",
                    days: "Gün",
                    pluralS: false 
                }
            }
        });

    message.channel.send(`🎉 **Çekiliş** ${giveawayChannel} adlı kanalda başlatıldı!`).then(a => a.delete({timeout: 10000}));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['g-create'],
  permLevel: 0
};

exports.help = {
  name: 'çekiliş-yap',
  description: 'çekiliş',
  usage: 'çekiliş-yap'
};
