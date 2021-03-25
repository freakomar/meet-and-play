const { model, Schema, Schema: {
    Types: { ObjectId },
},
} = require('mongoose')

const schema = new Schema({
    address: {
        type: String,
        default: '',
    },
    placement: {
        type: ObjectId,
        ref: "Placement",
      },
    
})

module.exports = model('MeetingPoint', schema)