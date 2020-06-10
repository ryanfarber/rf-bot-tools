/*
this is to format all of the platforms data streams into a nice context that is cohesive that

basically, each platform (discord/trello, etc) should send their raw data thru the context builder, which will translate
all the raw data into a nicely formatted thing to send to the bot logic.  make sense?

*/
var _log = '(ContextBuilder)'

class ContextBuilder {

  constructor(settings) {
    this.settings = settings || {}
    this.settings.debug = settings.debug || false;
    this.settings.simple = settings.simple || false;
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
    if (this.settings.debug) console.log(_log, JSON.stringify(input, null, ' '))
    if (this.settings.simple) console.log(_log, JSON.stringify(this, null, ' '))
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
    if (this.settings.debug) console.log(_log, JSON.stringify(input, null, ' '))
    if (this.settings.simple) console.log(_log, JSON.stringify(this, null, ' '))
    return this
  };

  FrameioContext(input) {
    if (this.settings.debug) console.log(input)
    
    this.action = input.type
    this.project = input.project.id
    this.resource = {
      id: input.resource.id,
      type: input.resource.type
    }
    this.user = {
      id: input.user.id
    }
    
    switch (this.action) {
      case 'comment.created':
        this.message = 'new comment'
        break
      case 'reviewlink.created':
        this.message = 'new review link created'
        break
      case 'asset.created':
        this.message = 'asset added.  transcoding...'
        break
      case 'asset.ready':
        this.message = 'transcoding finished! asset is ready'
        break
      default:
        console.log('new activity')
        break
        // this.message = 'new activity'
    };
    return this
  }; // END FrameioContext

  CCCContext(input){
      if (this.settings.debug) console.log(input)
      input = input.split('|')

      this.task = input[0]
      this.copyfrom = input[1]
      this.copyto = input[2]
      this.date = input[3]
      this.time = input[4]
      this.datacopied = input[5]
      this.status = input[6]
      this.exitcode = input[7]

      if (this.status == 'Success') {
        this.message = `✅ **Copy Successful**\n**task**: ${this.task}\n**status**: ${this.status}\n**time elapsed**: ${this.time}\n**data copied**: ${this.datacopied}`;
      } else 
      if (this.status == 'Cancelled') {
        this.message = `🚫 **Copy Cancelled**\n**task**: ${this.task}\n**status**: ${this.status}\n**time elapsed**: ${this.time}\n**data copied**: ${this.datacopied}`;
      };
      if (this.settings.simple) console.log(this)
      return this

  } // END CCCContext

};

module.exports = ContextBuilder