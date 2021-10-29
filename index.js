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
            const embed = new Discord.MessageEmbed()

    .addField('1', '11111111', true)

    .addField('2', '22222222', true)

    .addField('3', '333333333', true)

    .addField('4', '444444444', true)

    .addField('5', '5555555555555555555555', true)

    .addField('6', 'si', true)

    .setColor(0x66b3ff)

message.author.send(embed);
          });

//comandos solo para mi
client.on('message', message => {
            if (!message.content.startsWith(prefix) || !message.guild) return;
            if (message.author.id !== '724423864611766294') return;
            
            const cont = message.content.split(' ').slice(1);
            const args = cont.join(' ');
          });

client.login(process.env.TOKEN);