const express = require("express");
const router = express.Router();

const { createEventValidator, labelInParamsValidator, idInParamsValidator } = require("../validators/event.validators");
const validateFields = require("../validators/index.middleware");

//const { authentication } = require("../middlewares/auth.middlewares");

const eventController = require("../controllers/event.controller");


//llegan desde /event/....
router.get("/event", eventController.findAll);

router.get("/looking/:identifier",
    labelInParamsValidator,
    validateFields,
    eventController.findOneByLabel);

router.get("/find/event/:id",
    idInParamsValidator,
    validateFields,
    eventController.findOneById);


router.post(["/post/", "/event/:id"],
   // authentication,
    createEventValidator,
    validateFields,
    eventController.save);

router.delete("/delete/:id",
    idInParamsValidator,
    validateFields,
    eventController.deleteById);

module.exports = router;

