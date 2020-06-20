// discord-context.js

function DiscordContext(data, debug) {
  data = { 
    channel: { 
      type: undefined, 
      guild: { 
        name: undefined, 
        id: undefined 
      } 
    }, 
    author: { 
      username: undefined 
    } 
  }
  // this.settings = settings || {};
  this.context_name = 'discord';
  this.type = data.channel.type;
  this.timestamp = data.createdTimestamp;
  this.user = {
    name: data.author.username,
    id: data.author.id
  };
  this.message = {
    text: data.content,
    id: data.id
  };
  if (data.guild) {
    this.server = {
      name: data.channel.guild.name,
      id: data.channel.guild.id
    };
  }
  this.channel = {
    name: data.channel.name,
    id: data.channel.id
  };
  if (this.type == 'dm') this.channel.name = 'dm'
  if (debug) console.log(data)

};

module.exports = DiscordContext