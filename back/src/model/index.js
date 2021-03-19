const { model } = require('mongoose')
const User = require('./User')
const Placement = require('./Placement')
const MeetingPoint = require('./MeetingPoint')
const Meeting = require('./Meeting')

module.exports = {
    User,
    Placement,
    MeetingPoint,
    Meeting,
};