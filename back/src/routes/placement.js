const router = require('express-promise-router')()

// const { checkJWTSign } = require('../middlewares/jwtCheck.middleware')
const { placement } = require('../controllers')

router.route('/:id').get(placement.get)
router.route('/').post(placement.create)
router.route('/').get(placement.getAll)
router.route('/:id').put(placement.update)
router.route('/:id').delete(placement.delete)

module.exports = router