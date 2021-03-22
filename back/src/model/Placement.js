const { model, Schema, Schema: {
    Types: { ObjectId },
},
} = require('mongoose')

const schema = new Schema({
    name: {
        type: String,
        default: '',
    },
    region: {
        type: String,
        default: '',
    },
    meetingPoint: {
        type: ObjectId,
        ref: "MeetingPoint",
      },
    
})

module.exports = model('Placement', schema)