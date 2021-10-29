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
//comandos para todos
      client.on('message', message => {
        if (!message.content.startsWith(prefix) || !message.guild) return;
        if (message.author.bot) return;
        
        const cont = message.content.split(' ').slice(1);
        const args = cont.join(' ');
    
        if (message.content.startsWith(prefix+'invite')){
            message.channel.send('https://discord.com/api/oauth2/authorize?client_id=902292738492489778&permissions=8&scope=bot');
    
        } else if (message.content.startsWith(prefix+ 'say')) {
            if (!args) return;
            message.channel.send(args);
        } else if (message.content === 't.help')
           
message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
2
​
3
const embed = new Discord.MessageEmbed()
4
    .setAuthor(message.author.username, message.author.avatarURL())
5
    .addField('1', '11111111', true)
6
    .addField('2', '22222222', true)
7
    .addField('3', '333333333', true)
8
    .addField('4', '444444444', true)
9
    .addField('5', '5555555555555555555555', true)
10
    .addField('6', 'si', true)
11
    .setFooter("Version 1.0", client.user.cache.avatarURL())
12
    .setColor(0x66b3ff)
13
    
14
message.author.send(embed);
15
          });

//comandos solo para mi
client.on('message', message => {
            if (!message.content.startsWith(prefix) || !message.guild) return;
            if (message.author.id !== '724423864611766294') return;
            
            const cont = message.content.split(' ').slice(1);
            const args = cont.join(' ');
          });

client.login(process.env.TOKEN);