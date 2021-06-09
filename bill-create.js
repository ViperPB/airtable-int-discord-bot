const Discord = require('discord.js');

//Airtable API Work

var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyPwcXg03BeXQTC8'
});
var base = Airtable.base('appmToi6gFPOnBQs8');

//End Airtable API Work

module.exports = {
	name: 'bill-create',
	description: 'Submit a bill to the Docket.',
  execute(message, args) {
    var Channel = message.channel.name
    if(Channel != "propose-legislation") return message.reply(`you cannot use that command here, try it in <#851944786364858438>`);
    if (!args.length) return message.reply("you didn't provide any information about the bill. The correct formatting for the command is `$bill-create number, short title, link.`, so it should look like `$bill-create H.R. 1, Small Businesses Act, https://google.com`.");
    var arguments = args.toString();
    arguments = arguments.split(",,").join(";")
    arguments = arguments.split(",").join(" ")
    arguments = arguments.split(";").join(",")
    arguments = arguments.split(',');
    console.log(arguments);
    let billAuthor = message.member.displayName;
    console.log(billAuthor);
    base('Congressional Bills').create([
      {
        "fields": {
          "Bill Number": arguments[0],
          "Bill Short Title": arguments[1],
          "Link to Bill": arguments[2],
          "Status": "Introduced",
          "Author": billAuthor,
          "Approved": "Approved"
        }
      }
      ], function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    });
    var embed = new Discord.MessageEmbed()
      .setTitle(`Bill Creation Successful`)
      .setDescription("The bill was added to the docket with the following information:")
      .addFields(
		    { name: `Bill Number`, value: arguments[0], inline: false},
        { name: `Short Title`, value: arguments[1], inline: false},
        { name: `Link to Bill`, value: arguments[2], inline: false},
        { name: `Author`, value: billAuthor, inline: false}
	    )
      .setColor("#0080ff")
    message.channel.send(embed)
  }
};
