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
  if (message.author.id !== '724423864611766294') return;
   const args = message.content.slice().trim().split(/ +/g );
   const command = args.shift().toLowerCase();
   if (message.content === 't.a')) {
message.channel.send(`a`);
  } 
});

client.login('OTAyMjkyNzM4NDkyNDg5Nzc4.YXcTmA.XZcDY-NVxljRnk8VEHdGnMPI41U');