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
  name: "t.help para ver los comandos compatibles hasta el momento",
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
        } else if (message.content.startsWith(prefix+'help')) {
           message.channel.send('**'+message.author.username+'**, todos los comandos deben llevar "t." antes del nombre por ejemplo: t.help.');
            const embed = new Discord.MessageEmbed()

    .addField('help', 'Sirve para ver los comandos disponibles', true)

    .setColor(0x66b3ff);
    message.channel.send(embed);
        } else if (message.content.startsWith(prefix+ 'ban'))
        let mencionado = message.mentions.users.first();
let razon = args.slice(1).join(' ');

if(!mencionado) return message.reply('No ha mencionando a ningún miembro.');
if(!razon) return message.channel.send('Escriba una razón del uso de ban.');

message.guild.members.ban(mencionado, {reason: razon});
message.channel.send(`**${mencionado.username}**, fue baneado del servidor, razón: ${razon}.`);
});

//comandos solo por id
client.on('message', message => {
            if (!message.content.startsWith(prefix) || !message.guild) return;
            if (message.author.id !== '724423864611766294') return;
            
            const cont = message.content.split(' ').slice(1);
            const args = cont.join(' ');
          });

client.login(process.env.TOKEN);