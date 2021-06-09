const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	description: 'Shows a list of all commands.',
	execute(message, args) {
    const Discord = require('discord.js');
    var embed = new Discord.MessageEmbed()
      .setTitle(`USPS Docket Bot - Help`)
      .addFields(
		    { name: `${prefix}help`, value: 'Shows a list of all commands.', inline: false},
		    { name: `${prefix}ping`, value: 'Pong!', inline: false},
		    { name: `${prefix}bill-create`, value: 'Submit a bill to the Docket.', inline: false}
	    )
      .setColor("#0080ff")
    message.channel.send(embed)
  },
};
