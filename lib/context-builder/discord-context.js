// discord-context.js

function DiscordContext(input = { channel: { type: undefined, guild: { name: undefined, id: undefined } }, author: { username: undefined } }, debug) {
  // this.settings = settings || {};
  this.context_name = 'discord';
  this.type = input.channel.type;
  this.timestamp = input.createdTimestamp;
  this.user = {
    name: input.author.username,
    id: input.author.id
  };
  this.message = {
    text: input.content,
    id: input.id
  };
  if (input.guild) {
    this.server = {
      name: input.channel.guild.name,
      id: input.channel.guild.id
    };
  }
  this.channel = {
    name: input.channel.name,
    id: input.channel.id
  };
  if (this.type == 'dm') this.channel.name = 'dm'
  if (debug) console.log(input)

};

module.exports = DiscordContext