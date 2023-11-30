const express = require ("express");
const router = express.Router();

const{createArticleValidator, labelInParamsValidator, idInParamsValidator}= require("../validators/article.validators");
const validateFields = require("../validators/index.middleware");

const articleController = require("../controllers/article.controller");


//llegan desde /artficle/....
router.get("/",articleController.findAll);

router.get("/looking/:identifier", 
labelInParamsValidator, 
validateFields, 
articleController.findOneByLabel);

router.get("/find/:id", 
idInParamsValidator, 
validateFields,
articleController.findOneById);


router.post(["/", "/:id"],
createArticleValidator, 
validateFields, 
articleController.save);

router.delete("/:id",
idInParamsValidator,
validateFields,
articleController.deleteById);

module.exports = router;

