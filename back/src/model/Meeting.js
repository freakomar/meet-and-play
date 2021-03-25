const { model, Schema, Schema: {
    Types: { ObjectId },
},
} = require('mongoose')

const schema = new Schema({
    info: {
        type: String,
        default: '',
    },
    status: {
        type: String,
        default: '',
    },
    meetingPoint: {
        type: ObjectId,
        ref: "MeetingPoint",
      },    
})

module.exports = model('Meeting', schema)