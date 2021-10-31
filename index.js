const Discord = require("discord.js");
const client = new Discord.Client();

let prefix = process.env.PREFIX;

client.on("ready", () => {
    console.log(`Iniciando...`);
    console.log(`listo`);
    console.log(`todo en orden`);
    presencia();  
    });

function presencia(){
  client.user.setPresence({
status: "dnd",
activity: {
  name: "t.help",
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
            message.delete()
            message.channel.send(args);

        } else if (message.content.startsWith(prefix+'help')) {
           message.channel.send('**'+message.author.username+'**, todos los comandos deben llevar "t." antes del nombre por ejemplo: t.help.');
            const embed = new Discord.MessageEmbed()

    .addField('help', 'Sirve para ver los comandos disponibles', true)
    .addField('say', 'Sirve para que yo diga lo que tu quieras', true)
    .addField('invite', 'Comando inutil si no eres 인도 마호가니#5335', true)
    .addField('avatar', 'Es para ver la foto de perfil de alguien', true)
    .addField('server', 'Es para ver info sobre el server', true)

    .setColor(0x66b3ff);
    message.channel.send(embed);
        } else if (message.content.startsWith(prefix+'avatar')) {
        let miembro = message.mentions.users.first()
        if (!miembro) {
            const embed = new Discord.MessageEmbed()
                .setImage(`${message.author.displayAvatarURL()}`)
                .setColor(0x66b3ff)
                .setFooter(`Avatar de ${message.author.tag}`);
            message.channel.send(embed);
        }
      } else if (message.content.startsWith(prefix+'server')) {
      var server = message.guild;
  
     const embed = new Discord.MessageEmbed()
    .setThumbnail(server.iconURL())
    .setAuthor(server.name, server.iconURL()) 
    .addField('ID', server.id, true)
    .addField('Region', server.region, true)
    .addField('Creado el', server.joinedAt.toDateString(), true)
    .addField('Dueño del Servidor', server.owner.user.tag +'('+server.owner.user.id +')', true)
    .addField('Miembros', server.memberCount, true)
    .addField('Roles', server.roles.size, true)
    .setColor(0x66b3ff)
    
message.channel.send(embed);
      }
});
//comandos admins
//comandos solo por id
client.on('message', message => {
            if (!message.content.startsWith(prefix) || !message.guild) return;
            if (message.author.id !== '724423864611766294') return;
            
            const cont = message.content.split(' ').slice(1);
            const args = cont.join(' ');
            if (message.content.startsWith(prefix+'voice'))
            let canalvoz = message.member.voice.channel;
  if(!canalvoz || canalvoz.type !== 'voice') {
    message.channel.send('¡Necesitas unirte a un canal de voz primero!.');

 } else if (message.guild.voiceConnection) {
    message.channel.send('Ya estoy conectado en un canal de voz.');

 } else {
    message.channel.send('Conectando...').then(m => {
        canalvoz.join().then(() => {
            m.edit('Conectado exitosamente.').catch(error => console.log(error));

        }).catch(error => console.log(error));

    }).catch(error => console.log(error));

};

          });

client.login(process.env.TOKEN);