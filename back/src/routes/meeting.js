const router = require('express-promise-router')()

// const { checkJWTSign } = require('../middlewares/jwtCheck.middleware')
const { meeting } = require('../controllers')

router.route('/:id').get(meeting.get)
router.route('/').post(meeting.create)
router.route('/').get(meeting.getAll)
router.route('/:id').put(meeting.update)
router.route('/:id').delete(meeting.delete)

module.exports = router