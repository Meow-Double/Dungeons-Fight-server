const Router = require("express");
const dungeonsController = require("../controllers/dungeons.controller");

const router = new Router();

router.post("/", dungeonsController.postDungeons)
router.get("/", dungeonsController.getDungeons)
router.get("/:id", dungeonsController.getOneDungeons)


module.exports = router;