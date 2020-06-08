/*
this is to format all of the platforms data streams into a nice context that is cohesive that

basically, each platform (discord/trello, etc) should send their raw data thru the context builder, which will translate
all the raw data into a nicely formatted thing to send to the bot logic.  make sense?

*/
var _log = '(ContextBuilder)'

class ContextBuilder {

  constructor(settings) {
    this.settings = settings || {}
    this.debug = this.settings.debug || false;
    this.simplified = this.settings.simplified || false;
  };
  
  TrelloContext(input) {

    this.info = {
      service: 'trello',
      timestamp: input.date,
    }

    this.action = {
      id: input.id,
      type: input.type,
      timestamp: input.date
    }
    this.comment = input.data.text
    if (input.data.hasOwnProperty('board')) {
      this.board = {
        name: input.data.board.name,
        id: input.data.board.id
      };
    } else this.board = undefined;

    if (input.data.hasOwnProperty('list')) {
      this.list = {
        name: input.data.list.name,
        id: input.data.list.id
      };
    } else this.list = undefined;

    if (input.data.hasOwnProperty('card')) {
      this.card = {
        name: input.data.card.name,
        id: input.data.card.id,
        link: `trello://trello.com/c/${input.data.card.shortLink}`
      };
    } else this.card = undefined;

    this.user = {
      name: input.memberCreator.username,
      fullname: input.memberCreator.fullName,
      id: input.memberCreator.id
    }
    
    // returns the newly created context object
    if (this.debug) console.log(_log, JSON.stringify(input, null, ' '))
    if (this.simplified) console.log(_log, JSON.stringify(this, null, ' '))
    return this

  };

  DiscordContext(input) {
    if (input == undefined) return
      
    this.info = {
      service: 'discord',
      type: input.channel.type,
      timestamp: input.createdTimestamp
    }
    this.user = {
      name: input.author.username,
      id: input.author.id
    }
    this.message = {
      text: input.content,
      id: input.id
    }
    this.server = {
      name: input.channel.guild.name,
      id: input.channel.guld.id
    }
    this.channel = {
      name: input.channel.name,
      id: input.channel.id
    }
    return this
  };


  TwitchContext(input) {
    this.info = {
      service: 'twitch',
      type: input['message-type'],
      timestamp: input['tmi-sent-ts']
    }
    this.user = {
      name: input.username,
      id: input['user-id'],
      type: input['user-type'],
      is_subscriber: input.subscriber
    }
    this.message = {
      text: input.msg,
      id: input.id
    }
    this.channel = {
      name: input.target
    }
    if (this.debug) console.log(_log, JSON.stringify(input, null, ' '))
    if (this.simplified) console.log(_log, JSON.stringify(this, null, ' '))
    return this
  }

};

module.exports = ContextBuilder