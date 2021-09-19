const fs = require("fs");
const Discord = require("discord.js");
const { Client, Util } = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");
const chalk = require("chalk");
const fetch = require("node-fetch");
const moment = require("moment");
const { GiveawaysManager } = require('discord-giveaways');
const ayarlar = require("./ayarlar.json");
const express = require("express");

/////
const app = express();
app.get("/", (req, res) =>
  res.send("Bot Aktif | Discord = https://discord.gg/NMnPUjK")
);
app.listen(process.env.PORT, () =>
  console.log("Port ayarlandı: " + process.env.PORT)
);
//////////////////////////////////////////////////////////////

//------------------Değişen Oynuyor---------------------------\\

const bot = new Discord.Client();


var oyun = [
  
    `✨ HELP ?! | el!yardım`,
    `⚡️ Kayıt Sistemi Eklendi`,
    `🚀 7/24 HIZMET  `,
    `🔔 SPONSOR ARANIYOR`,
    `🌟 Prefix | (el!)`
    ]
  
client.on("ready", () => {
setInterval(function() {

         var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
         client.user.setActivity(oyun[random], {"type": "WATCHING"});

        }, 2 * 900);
});

client.on("message", async message => {

  const ms = require('parse-ms')
  
  let cooldown = 180000000
  let sure = await db.fetch(`sahipsure_${message.author.id}`);
  
  let kisi = "683752128644251660"
      
      if(message.author.id === kisi) {   
      if (sure !== null && cooldown - (Date.now() - sure) > 0) {
  
          let time = ms(cooldown - (Date.now() - sure));
  
      } else {
  
    if (message.content.length > 1) {
  
  db.set(`sahipsure_${message.author.id}`, Date.now());
  
    const embed = new Discord.MessageEmbed()
  
    .setDescription(`OOOOOO Sahibim gelmiş hoş gelmişsen napıyorsun `)
  
    .setColor(15844367)
  
    .setFooter(`ELREX & ELLUNATI`)
  
     message.channel.send(embed)
  
    }
  
  };
  }
            
  
            if (message.author.id !== kisi) return;
  });

//------------Seviye-------------------//
client.on("message", async message => {
  let prefix = ayarlar.prefix;

  var id = message.author.id;
  var gid = message.guild.id;

  let hm = await db.fetch(`seviyeacik_${gid}`);
  let kanal = await db.fetch(`svlog_${gid}`);
  let xps = await db.fetch(`verilecekxp_${gid}`);
  let seviyerol = await db.fetch(`svrol_${gid}`);
  let rollvl = await db.fetch(`rollevel_${gid}`);

  if (!hm) return;
  if (message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  var xp = await db.fetch(`xp_${id}_${gid}`);
  var lvl = await db.fetch(`lvl_${id}_${gid}`);
  var xpToLvl = await db.fetch(`xpToLvl_${id}_${gid}`);

  if (!lvl) {
    if (xps) {
      db.set(`xp_${id}_${gid}`, xps);
    }
    db.set(`xp_${id}_${gid}`, 4);
    db.set(`lvl_${id}_${gid}`, 1);
    db.set(`xpToLvl_${id}_${gid}`, 100);
  } else {
    if (xps) {
      db.add(`xp_${id}_${gid}`, xps);
    }
    db.add(`xp_${id}_${gid}`, 4);

    if (xp > xpToLvl) {
      db.add(`lvl_${id}_${gid}`, 1);
      db.add(
        `xpToLvl_${id}_${gid}`,
        (await db.fetch(`lvl_${id}_${gid}`)) * 100
      );

      if (kanal) {
        client.channels.cache
          .get(kanal.id)
          .send(
            message.member.user.username +
              " Seviye Atladı! Yeni seviyesi** " +
              lvl +
              " **Tebrikler! "
          );
      }
    }

    if (seviyerol) {
      if (lvl >= rollvl) {
        message.guild.member(message.author.id).roles.add(seviyerol);
        if (kanal) {
          client.channels.cache
            .get(kanal.id)
            .send(
              message.member.user.username +
                " Yeni Seviyesi** " +
                rollvl +
                " **ve** " +
                seviyerol +
                " **Rolünü kazandı!"
            );
        }
      }
    }
  }
});
/////////////////////////////////////////seviye////////////////////////////////////



client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.length > 4) {
    if (db.fetch(`capslock_${msg.guild.id}`)) {
      let caps = msg.content.toUpperCase();
      if (msg.content == caps) {
        if (!msg.member.hasPermission("ADMINISTRATOR")) {
          if (!msg.mentions.users.first()) {
            msg.delete();
            return msg.channel
              .send(`Caps Locku Kapatırmısın`)
              .then(m => m.delete(3000));
          }
        }
      }
    }
  }
});


client.on("message", message => {
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(" ")[0].slice(ayarlar.prefix.length);
  let params = message.content.split(" ").slice(1);
  let perms = client.yetkiler(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
});

client.on("message", async  msg => {
 var i = await db.fetch(`küfür_${msg.guild.id}`)
    if (i == 'acik') {
       const küfür = ["oç","ojs","oj","orosbu", "sikeyto", "sikim", "Oruspu", "Sikik", "Amk", "Sokim", "pornoya koyim", "sikey", "peç", "orospu çocuğu","orospu","sikim","sikeyim","siktir","piç","am","amcık","pij","götünü","göt","sg","amk","Amk","yarrak"];
        if (küfür.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                    return msg.reply('Bu Sunucuda Küfür Engelleme Filtresi Aktiftir. Küfür Yapmana İzin Veremem !').then(msg => msg.delete(3000));
    

  msg.delete(3000);                              

            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    else if (i == 'kapali') {
      
    }
    if (!i) return;
  })
  ;

 client.on("guildMemberRemove", async member => {
  
    if (db.has(`gçkanal_${member.guild.id}`) === false) return;
    var canvaskanal = member.guild.channels.cache.get(db.fetch(`gçkanal_${member.guild.id}`));
    if (!canvaskanal) return;
  
    const request = require("node-superfetch");
    const Canvas = require("canvas"),
      Image = Canvas.Image,
      Font = Canvas.Font,
      path = require("path");
  
    var randomMsg = ["Sunucudan Ayrıldı."];
    var randomMsg_integer =
      randomMsg[Math.floor(Math.random() * randomMsg.length)];
  
    let msj = await db.fetch(`cikisM_${member.guild.id}`);
    if (!msj) msj = `{uye}, ${randomMsg_integer}`;
  
    const canvas = Canvas.createCanvas(640, 360);
    const ctx = canvas.getContext("2d");
  
    const background = await Canvas.loadImage(
      "https://i.hizliresim.com/Wrn1XW.jpg"
    );
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
    ctx.strokeStyle = "#74037b";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
    ctx.fillStyle = `#D3D3D3`;
    ctx.font = `37px "Warsaw"`;
    ctx.textAlign = "center";
    ctx.fillText(`${member.user.username}`, 300, 342);
  
    let avatarURL = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
    const { body } = await request.get(avatarURL);
    const avatar = await Canvas.loadImage(body);
  
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.arc(250 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);
    ctx.clip();
    ctx.drawImage(avatar, 250, 55, 110, 110);
  
    const attachment = new Discord.MessageAttachment(
      canvas.toBuffer(),
      "ro-BOT-güle-güle.png"
    );
  
      canvaskanal.send(attachment);
      canvaskanal.send(
        msj.replace("{uye}", member).replace("{sunucu}", member.guild.name)
      );
      if (member.user.bot)
        return canvaskanal.send(`🤖 Bu bir bot, ${member.user.tag}`);
    
  });



//-------------Bot Eklenince Bir Kanala Mesaj Gönderme Komutu ---------------\\

const embed = new Discord.MessageEmbed()
.setThumbnail()
.addField(`Elrex | ELS`, `**Selamlar, Ben Ellunati (Elrex'in Geliştiricisi) Öncelikle Botumuzu Eklediğiniz ve Bize Destek Olduğunuz İçin Sizlere Teşekkürlerimi Sunarım**`)
.addField(`Elrex | Yardım Menüsü`, `**el!yardım yazarak tüm komutlarımıza bakabilirsin**`)
.setFooter(`Elrex | Mutlu Bir Nefes| 2021`)
.setTimestamp();


client.on("guildCreate", guild => {

let defaultChannel = "";
guild.channels.cache.forEach((channel) => {
if(channel.type == "text" && defaultChannel == "") {
if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
defaultChannel = channel;
}
}
})

defaultChannel.send(embed)

});


client.on("message", async message => {

  if (message.author.bot) return;

  if (!message.guild) return;

  let prefix = db.get(`prefix_${message.guild.id}`);

  if (prefix === null) prefix = prefix;

  if (!message.content.startsWith(prefix)) return;

  if (!message.member)

  message.member = await message.guild.members.fetch(message);

  const args = message.content

    .slice(prefix.length)

    .trim()

    .split(/ +/g);

  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;
  
  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);

});

///////rolkoruma
client.on("roleDelete", async role => {
  let rol = await db.fetch(`rolk_${role.guild.id}`);
  if (rol) { 
         const entry = await role.guild.fetchAuditLogs({ type: "ROLE_DELETE" }).then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
  role.guild.roles.create({ data: {
          name: role.name,
          color: role.color,
          hoist: role.hoist,
          permissions: role.permissions,
          mentionable: role.mentionable,
          position: role.position
}, reason: 'Rol koruma açık olduğundan yetkili tarafından silinen rol tekrar açıldı.'})
  }
})


//Muteliyken sw den çıkana mute
client.on('guildMemberAdd', async(member) => {
  let mute = db.fetch(`muterol_${member.guild.id}`);
  let mutelimi = db.fetch(`muteli_${member.guild.id + member.id}`)
  if (!mutelimi) return;
  if (mutelimi == "muteli") {
  member.roles.add(mute)
   member.send("Muteliyken Sunucudan Çıktığın için Yeniden Mutelendin!")
       const modlog = db.fetch(`modlogKK_${member.guild.id}`)
    if (!modlog) return;
     db.delete(`muteli_${member.guild.id + member.id}`)
        const embed = new Discord.MessageEmbed()
      .setThumbnail(member.avatarURL())
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('Eylem:', '**Mute**')
      .addField('Kullanıcı:', `${member} (${member.id})`)
      .addField('Yetkili:', `${client.user} (${client.user.id})`)
      .addField('Süre', "Sonsuz")
      .addField('Sebep', "Muteliyken Sunucudan Çıkmak.")
     member.guild.channels.cache.get(modlog).send(embed);
  }
  })
  //Muteliyken sw den çıkana mute

client.on('message', msg => {
  client.emit('checkMessage', msg); 
})





const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} adet komut yüklemeye hazırlanılıyor.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut ismi: ${props.help.name.toUpperCase()}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.yetkiler = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = -ayarlar.varsayilanperm;
  if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if (message.member.hasPermission("KICK_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 3;
  if (message.member.hasPermission("MANAGE_GUILD")) permlvl = 4;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 5;
  if (message.author.id === message.guild.ownerID) permlvl = 6;
  if (message.author.id === ayarlar.sahip) permlvl = 7;
  return permlvl;
};

client.on("message", async msg => {
  if (msg.author.bot) return;

  let i = await db.fetch(`reklamFiltre_${msg.guild.id}`);
  if (i == "acik") {
    const reklam = [
      "https://",
      "http://",
      "discord.gg",
      "discord.gg",
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      ".party",
      ".rf.gd",
      ".az"
    ];
    if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.hasPermission("MANAGE_GUILD")) {
          msg.delete();
          return msg.channel
            .send(`${msg.author.tag}, Reklam Yapmak Yasak!`)
            .then(msg => msg.delete(10000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

client.on("message", async msg => {
  const i = await db.fetch(`ssaass_${msg.guild.id}`);
  if (i == "acik") {
    if (
      msg.content.toLowerCase() == "sa" ||
      msg.content.toLowerCase() == "s.a" ||
      msg.content.toLowerCase() == "selamun aleyküm" ||
      msg.content.toLowerCase() == "sea" ||
      msg.content.toLowerCase() == "selam"
    ) {
      try {
        return msg.reply("Aleyküm Selam, Hoş Geldin");
      } catch (err) {
        console.log(err);
      }
    }
  } else if (i == "kapali") {
  }
  if (!i) return;
});



//////////////////////////////////////////////////


client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

//////çekiliş/////////..
if(!db.get("giveaways")) db.set("giveaways", []);

const GiveawayManagerWithOwnDatabase = class extends GiveawaysManager {

    async getAllGiveaways(){
        return db.get("giveaways");
    }

    async saveGiveaway(messageID, giveawayData){
        db.push("giveaways", giveawayData);
        return true;
    }

    async editGiveaway(messageID, giveawayData){
        const giveaways = db.get("giveaways");
        const newGiveawaysArray = giveaways.filter((giveaway) => giveaway.messageID !== messageID);
        newGiveawaysArray.push(giveawayData);
        db.set("giveaways", newGiveawaysArray);
        return true;
    }

    async deleteGiveaway(messageID){
        const newGiveawaysArray = db.get("giveaways").filter((giveaway) => giveaway.messageID !== messageID);
        db.set("giveaways", newGiveawaysArray);
        return true;
    }
  
  
};
const manager = new GiveawayManagerWithOwnDatabase(client, {
  storage: false,
  updateCountdownEvery: 5000,
  default: {
    botsCanWin: false,
    embedColor: "#0a99ff",
    reaction: "🎉"
  }
});
client.giveawaysManager = manager;


client.login(ayarlar.token);
