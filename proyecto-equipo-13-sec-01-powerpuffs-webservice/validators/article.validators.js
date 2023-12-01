const { body,param} = require('express-validator');

const validators = {};

validators.createArticleValidator = [
    param("id")
    .optional()
    .notEmpty().withMessage("Id is required")
    .isMongoId().withMessage("Identifier must be a Mongo Id"),
    body("title")
        .notEmpty().withMessage("Title is Required"),
    body("description")
        .notEmpty().withMessage("Description is Required")
        .isLength({ max: 280 }).withMessage("Description max lenght is 280 characters"),
    body("image")
        .notEmpty().withMessage("Image is Required")
        .isURL().withMessage("Image must be an URL")
];

validators.labelInParamsValidator =[
param("identifier")
.notEmpty().withMessage("Label is required")
//Next sentence will be use in user validator
//.isMongoId().withMessage("Identifier must be a Mongo Id")
]

validators.idInParamsValidator =[
    param("id")
    .notEmpty().withMessage("Id is required")
    .isMongoId().withMessage("Identifier must be a Mongo Id")
    ]
    

module.exports = validators;