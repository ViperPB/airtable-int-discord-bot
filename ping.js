module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
    message.channel.send("Pinging...").then(m =>{
      const Discord = require('discord.js');
      m.edit(`Ping Complete`)
      var ping = m.createdTimestamp - message.createdTimestamp;
      var embed = new Discord.MessageEmbed()
        .setAuthor(`Your ping is ${ping}MS.`)
        .setColor("#0080ff")
    m.edit(embed)
  },
)}};