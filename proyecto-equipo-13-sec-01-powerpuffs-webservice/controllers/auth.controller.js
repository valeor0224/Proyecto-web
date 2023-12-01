const User = require("../models/User.model");
const { createToken, verifyToken } = require("./../utils/jwt.tools");

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
        //Crear un TOKEN
        const token = await createToken(user._id);

        //Almacenar un token
        let _tokens = [...user.tokens];
        //Verificar la integridad de los token actuales -> max 5 sesiones
        const _verifyPromises = _tokens.map(async (_t) => {
            const status = await verifyToken(_t);
            return status ? _t : null;
        });

        _tokens = (await Promise.all(_verifyPromises))
            .filter(_t => _t)
            .slice(0, 4);

        _tokens = [token, ..._tokens];
        user.tokens = _tokens;

        await user.save();

        //Devolver token
        return res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = controller;