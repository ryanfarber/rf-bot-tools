// frame.io context

function FrameioContext(input, settings) {

    if (this.settings.debug) console.log(input)

    this.context_name = 'frameio'
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
    
    // return this
  }; // END FrameioContext

  module.exports = FrameioContext