const Pet = require("../models/pet.model");
//const debug = require("debug")("app:event-controller");

const controller = {};

controller.save = async (req, res, next) => {

    //premisa- la ruta save debe de estar autenticado

    try {
        const { name, story, gender, qualities, condition, age, colour } = req.body;
        const { id } = req.params;
        //const { user } = req;

        //debug({user});

        /*const article = new Event({
            title: title,
            description: description,
            image: image,
            label: label
        });*/

        let pet = await Pet.findById(id);

        if (!pet) {
            pet = new Pet();
        }

        pet["name"] = name;
        pet["story"] = story;
        pet["gender"] = gender;
        pet["qualities"] = qualities;
        pet["condition"] = condition;
        pet["age"] = age;
        pet["colour"] = colour;

        const petSaved = await pet.save();
        if (!petSaved) {
            //si el documento que devulve save es nulo significa que hubo un conflicto
            return res.status(409).json({ error: "Error saving pet" });
        }

        return res.status(201).json({ petSaved });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

controller.findAll = async (req, res, next) => {
    try {
        const pets = await Pet.find({ hidden: false }); //filtrando los articulos que sean visibles
        return res.status(200).json({ pets});

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

controller.findOneByLabel = async (req, res, next) => {
    try {
        const { identifier } = req.params;
        const petpublication = await Pet.find({ label: identifier });
        if (!petpublication) {
            return res.status(404).json({ error: "Pet not found" })
        }

        return res.status(200).json({ publication });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

//creating findOnebyIdFunction

controller.findOneById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const petstory = await Pet.findById(id);
        if (!petstory) {
            return res.status(404).json({ error: "Pet not found" })
        }

        return res.status(200).json({ story });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

//creating findOnebyName
controller.findOneByName = async (req, res, next) => {
    try {
        const { nameidentifier } = req.params;
        const namepetpublication = await Pet.find({ label: nameidentifier });
        if (!namepetpublication) {
            return res.status(404).json({ error: "Pet not found" })
        }

        return res.status(200).json({ namepetpublication });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

//08-CRUD
controller.deleteById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const pet = await Pet.findByIdAndDelete(id);

        if (!pet) {
            return res.status(404).json({ error: "Pet not found" });
        }

        return res.status(200).json({ message: "Pet Deleted" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}



module.exports = controller;

