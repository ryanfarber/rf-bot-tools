function TwitchContext(input = {}, settings) {
  this.settings = settings || {}
  
  this.context_name = 'twitch';
  this.type = input["message-type"];
  this.timestamp = input['tmi-sent-ts'];
  this.user = {
    name: input.username,
    id: input['user-id'],
    type: input['user-type'],
    is_subscriber: input.subscriber
  };
  this.message = {
    text: input.msg,
    id: input.id
  };
  this.channel = {
    name: input.target
  };
  // if (this.settings.debug) console.log(_log, JSON.stringify(input, null, ' '));
  // if (this.settings.simple) console.log(_log, JSON.stringify(this, null, ' '));
  // return this
};

module.exports = TwitchContext