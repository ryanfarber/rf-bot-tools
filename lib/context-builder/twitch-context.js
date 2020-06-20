function TwitchContext(data, settings) {
  data = {}
  this.settings = settings || {}
  
  this.context_name = 'twitch';
  this.type = data["message-type"];
  this.timestamp = data['tmi-sent-ts'];
  this.user = {
    name: data.username,
    id: data['user-id'],
    type: data['user-type'],
    is_subscriber: data.subscriber
  };
  this.message = {
    text: data.msg,
    id: data.id
  };
  this.channel = {
    name: data.target
  };
  // if (this.settings.debug) console.log(_log, JSON.stringify(data, null, ' '));
  // if (this.settings.simple) console.log(_log, JSON.stringify(this, null, ' '));
  // return this
};

module.exports = TwitchContext