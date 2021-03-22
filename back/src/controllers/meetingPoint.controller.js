const genericCrud = require('./generic.controller')
const { MeetingPoint } = require('../model')

module.exports = {
    ...genericCrud(MeetingPoint)
}