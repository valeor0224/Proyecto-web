//importando modelo del articulo
const Article = require("../models/article.model");
const debug = require("debug")("app:post-controller");

const controller = {};

controller.save = async (req, res, next) => {

    //premisa- la ruta save debe de estar autenticado

    try {
        const { title, description, publication_date, image, label, publication_zone, author_name } = req.body;
        const { id } = req.params;
        const { user } = req;

        debug({user});

        /*const article = new Article({
            title: title,
            description: description,
            image: image,
            label: label
        });*/

        let article = await Article.findById(id);

        if (!article) {
            article = new Article();
        }

        article["title"] = title;
        article["description"] = description;
        article["publication_date"] = publication_date;
        article["image"] = image;
        article["label"] = label;
        article["publication_zone"] = publication_zone;
        article["author_name"] = author_name;

        const articleSaved = await article.save();
        if (!articleSaved) {
            //si el documento que devulve save es nulo significa que hubo un conflicto
            return res.status(409).json({ error: "Error saving article" });
        }

        return res.status(201).json({ articleSaved });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

controller.findAll = async (req, res, next) => {
    try {
        const articles = await Article.find({ hidden: false }); //filtrando los articulos que sean visibles
        return res.status(200).json({ articles });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

controller.findOneByLabel = async (req, res, next) => {
    try {
        const { identifier } = req.params;
        const post = await Article.find({ label: identifier });
        if (!post) {
            return res.status(404).json({ error: "Article not found" })
        }

        return res.status(200).json({ post });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

//creating findOnebyIdFunction

controller.findOneById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const publication = await Article.findById(id);
        if (!publication) {
            return res.status(404).json({ error: "Article not found" })
        }

        return res.status(200).json({ publication });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

//08-CRUD
controller.deleteById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const article = await Article.findByIdAndDelete(id);

        if (!article) {
            return res.status(404).json({ error: "Article not found" });
        }

        return res.status(200).json({ message: "Article Deleted" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}



module.exports = controller;

