const genericCrud = require('./generic.controller')
const { Meeting } = require('../model')

module.exports = {
    ...genericCrud(Meeting)
}