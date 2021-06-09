//Airtable API Work

var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyPwcXg03BeXQTC8'
});
var base = Airtable.base('appmToi6gFPOnBQs8');

//End Airtable API Work

module.exports = {
	name: 'bill-info',
	description: 'See the details of a bill on the docket.',
  execute(message, args) {
    let rep = message.guild.roles.cache.get("844267597939343417");
    let sen = message.guild.roles.cache.get("844267597955989533");
    if(!message.member.roles.cache.has(rep.id) || !message.member.roles.cache.has(sen.id)) return message.reply('you need the "Represenative" or "Senator" Role.');
    if(!msg.channel.id === "844267600607576129") return message.reply('incorrect channel, use .');
    if (!args.length) return message.reply("provide a bill number.")
    base('Congressional Bills').filterByFormula={"Bill Number"}=args[0], function(err, record) {
      if (err) { console.error(err); return; }
       console.log('Retrieved', record.id);
    });
  }
};