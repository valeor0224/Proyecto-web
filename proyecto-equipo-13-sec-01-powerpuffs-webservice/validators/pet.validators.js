const { body, param } = require('express-validator');

const validators = {};

validators.createPetValidator = [
    param("id")
        .optional()
        .notEmpty().withMessage("Id is required")
        .isMongoId().withMessage("Identifier must be a Mongo Id"),
    body("story")
        .notEmpty().withMessage("Story is Required"),
    body("gender")
        .notEmpty().withMessage("Gender is Required"),
    body("age")
        .notEmpty().withMessage("Age is Required"),
    body("colour")
        .notEmpty().withMessage("Colour is Required"),
    body("image")
        .notEmpty().withMessage("Image is Required")
        .isURL().withMessage("Image must be an URL")
];

validators.labelInParamsValidator = [
    param("identifier")
        .notEmpty().withMessage("Label is required")
]

validators.idInParamsValidator = [
    param("id")
        .notEmpty().withMessage("Id is required")
        .isMongoId().withMessage("Identifier must be a Mongo Id")
]

validators.nameInParamsValidator= [
    param("nameidentifier")
        .notEmpty().withMessage("Name is required")
]


module.exports = validators;