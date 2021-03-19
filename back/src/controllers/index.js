const user = require('./user.controllers')
const meeting = require('./meeting.controllers')
const meetingPoint = require('./meetingPoint.controllers')
const placement = require('./placement.controllers')

module.exports = {
    user,
    meeting,
    meetingPoint,
    placement
}