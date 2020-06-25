// trello-context.js

function TrelloContext(input = {data: {}, memberCreator: {}}) {
    this.context_name = 'trello'
    this.info = {
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

  module.exports = TrelloContext