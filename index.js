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

client.login('OTAyMjkyNzM4NDkyNDg5Nzc4.YXcTmA.XZcDY-NVxljRnk8VEHdGnMPI41U');