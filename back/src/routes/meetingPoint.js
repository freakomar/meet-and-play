const router = require('express-promise-router')()

// const { checkJWTSign } = require('../middlewares/jwtCheck.middleware')
const { meetingPoint } = require('../controllers')

router.route('/:id').get(meetingPoint.get)
router.route('/').post(meetingPoint.create)
router.route('/').get(meetingPoint.getAll)
router.route('/:id').put(meetingPoint.update)
router.route('/:id').delete(meetingPoint.delete)

module.exports = router