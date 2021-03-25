const { model, Schema, Schema: {
    Types: { ObjectId },
},
} = require('mongoose')

const schema = new Schema({
    username: {
        type: String,
        default: '',
    },
    password: {
        type: String,
        default: '',
    },
    locationUser: {
        type: String,
        default: '',
    },
    placement: {
        type: ObjectId,
        ref: "Placement",
      },
    
})

module.exports = model('User', schema)