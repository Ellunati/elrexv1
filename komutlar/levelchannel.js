/////////////////////////////level-channel.js//////////////////////////////

const 
{
    MessageEmbed
} 
= 
require
(
    'discord.js'
    )

const db = require('quick.db')

exports.run = async(client, message, args) => {
let system = await db.fetch(`level.system_${message.guild.id}`)
        let channel = message.mentions.channels.first()
        let sq = args[0]

        if(!message.member.hasPermission("ADMINISTRATOR")) {return message.channel.send(`You dont have permission.`)
    } else {
        if(!sq) {
        message
    .channel
.send(new MessageEmbed()
.setDescription(`
You need to specify a valid thing.

Examples:
\`\`\`
panco level-channel set #channel
panco level-channel close
\`\`\`
`)) } else {
    if(sq ==
        "set") 
        {
            if(system) {
                return message
                .channel
                .send(new MessageEmbed
                    ()
                    .setDescription(`
                    System already opened.
                    `))
            } 
            else 
            {
                if(!channel) {
                    return message.
                    channel
                    .send(new MessageEmbed
                        ()
                        .setDescription(
                            `
                            Mention a channel.
                            ` 
                        ))
                }
                else
                {
                    await db.set(`level.system_${message.guild.id}`, channel.id)
                    return message
                    .channel
                    .send(new MessageEmbed
                        ()
                        .setDescription(
                            `
                            Channel set! ${channel}
                            `
                        ))
                }
            }
        } else {
                if(sq 
                    ==
                    "close"
                    ) {
                        if(!system) { return message.channel.send(`System is not opened.`) } else {
                            await db.delete(`level.system_${message.guild.id}`)
                            return message.channel.send(`Level system closed successfully.`)
                        }
                    }
        }
}
        }


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'levelasddasdasdasdsaasd-channel'
};
