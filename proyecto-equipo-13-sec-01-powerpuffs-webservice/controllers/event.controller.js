//importando modelo del articulo
const Event = require("../models/event.model");
const debug = require("debug")("app:event-controller");

const controller = {};

controller.save = async (req, res, next) => {

    //premisa- la ruta save debe de estar autenticado

    try {
        const { title, description, publication_date, image, label, publication_zone, author_name } = req.body;
        const { id } = req.params;
        const { user } = req;

        debug({user});

        /*const article = new Event({
            title: title,
            description: description,
            image: image,
            label: label
        });*/

        let event = await Event.findById(id);

        if (!event) {
            event = new Event();
        }

        event["title"] = title;
        event["description"] = description;
        event["publication_date"] = publication_date;
        event["image"] = image;
        event["label"] = label;
        event["publication_zone"] = publication_zone;
        event["author_name"] = author_name;

        const eventSaved = await event.save();
        if (!eventSaved) {
            //si el documento que devulve save es nulo significa que hubo un conflicto
            return res.status(409).json({ error: "Error saving event" });
        }

        return res.status(201).json({ eventSaved });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

controller.findAll = async (req, res, next) => {
    try {
        const events = await Event.find({ hidden: false }); //filtrando los articulos que sean visibles
        return res.status(200).json({ events });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

controller.findOneByLabel = async (req, res, next) => {
    try {
        const { identifier } = req.params;
        const publication = await Event.find({ label: identifier });
        if (!publication) {
            return res.status(404).json({ error: "Event not found" })
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
        const story = await Event.findById(id);
        if (!story) {
            return res.status(404).json({ error: "Event not found" })
        }

        return res.status(200).json({ story });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

//08-CRUD
controller.deleteById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const event = await Event.findByIdAndDelete(id);

        if (!event) {
            return res.status(404).json({ error: "Event not found" });
        }

        return res.status(200).json({ message: "Event Deleted" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}



module.exports = controller;

