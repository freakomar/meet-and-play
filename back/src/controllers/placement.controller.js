const genericCrud = require('./generic.controller')
const { Placement } = require('../model')

module.exports = {
    ...genericCrud(Placement)
}