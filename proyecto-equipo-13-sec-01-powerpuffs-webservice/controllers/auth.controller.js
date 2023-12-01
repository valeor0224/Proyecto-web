const User = require("../models/User.model");


const controller = {};

controller.register = async (req, res, next) => {
    try {
        //Obtener la info
        const { username, email, password } = req.body;
        //Verificar la existencia del correo y el user
        const user =
            await User.findOne({ $or: [{ username: username }, { email: email }] });

        if (user) {
            return res.status(409).json({ error: "User already exists!" });
        }
        //  Si no existe lo creamos
        const newUser = new User({
            username: username,
            email: email,
            password: password
        })

        await newUser.save();

        return res.status(201).json({ message: "User registered" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

controller.login = async (req, res, next) => {
    try {
        //Obtener la información -> usuario o correo(identificador), password
        const { identifier, password } = req.body;
        const user =
            await User.findOne({ $or: [{ username: identifier }, { email: identifier }] });

        //Verificar si el usuario existe
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        //Si existe, se verifica la password
        //Si no existe, retornar 404

        if (!user.comparePassword(password)) {
            return res.status(401).json({ error: "Incorrect password" });
        }

        //Si la password coincide ->Loggeamos (TODO)
        return res.status(200).json({ message: "Succesfuly login" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = controller;