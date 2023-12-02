const express = require("express");
const router = express.Router();

const { createPetValidator, labelInParamsValidator, idInParamsValidator, nameInParamsValidator } = require("../validators/pet.validators");
const validateFields = require("../validators/index.middleware");

//const { authentication } = require("../middlewares/auth.middlewares");

const petController = require("../controllers/pet.controller");


//llegan desde /artficle/....
router.get("/", petController.findAll);

router.get("/looking/pet/:identifier",
    labelInParamsValidator,
    validateFields,
    petController.findOneByLabel);

router.get("/find/:id",
    idInParamsValidator,
    validateFields,
    petController.findOneById);

router.get("/find/:nameidentifier",
    nameInParamsValidator,
    validateFields,
    petController.findOneById);

router.post(["/", "/:id"],
    //authentication,
    createPetValidator,
    validateFields,
    petController.save);

router.delete("/:id",
    idInParamsValidator,
    validateFields,
    petController.deleteById);

module.exports = router;

