const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setDescription("```Ne yazık ki bu komutu kullanmaya yetkin yok.```")
      .setColor("RED")
  .setAuthor(`Hatalı Giriş`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     

    message.channel.send(embed);
    return;
  }

  let u = message.mentions.users.first();
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Lütfen daveti sıfırlanacak kişiyi etiketleyiniz!")
        .setColor("RED")
  .setAuthor(`Hatalı Giriş`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     
    );
  }

  const Lrows = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(
      `${u} Adlı şahsın davetlerinin sıfırlanmasını onaylıyor musunuz?`
    )
  .setAuthor(`Onaylama İsteği`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     
  message.channel.send(Lrows).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("İşlem iptal oldu!"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        message.channel.send(
          `İşlem onaylandı! ${u} adlı şahsın davetleri sıfırlandı!`
        );

        db.delete(`davet_${message.author.id}_${message.guild.id}`);
      }
    });
  });
};

module.exports.conf = {
  aliases: ["davetsıfırla"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-sıfırla",
  description: "davet-sıfırla",
  usage: "davet-sıfırla"
};
