const Router = require('express');
const userRouter = require('./user.routes');
const bagRouter = require('./bag.routes');
const dungeonsRouter = require('./dungeons.routes');
const thingsRouter = require('./things.routes');

const router = new Router();

router.use('/user', userRouter);
router.use('/bag', bagRouter);
router.use('/dungeons', dungeonsRouter);
router.use('/things', thingsRouter);

module.exports = router;
