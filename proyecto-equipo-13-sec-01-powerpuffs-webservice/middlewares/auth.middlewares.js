const debug = require("debug")("app:auth-middleware");
const { verifyToken } = require("../utils/jwt.tools");
const User = require("../models/User.model");

const middlewares = {};
const PREFIX = "Bearer";


//autenticar credenciales para entrar al sistema
//token almacena id del usuario
middlewares.authentication = async (req, res, next) => {
    try {
        debug("User authentication");
        // 01 - Verificar el authorization
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).json({ error: "User not authenticated" })
        }

        // 02- Validez del token
        const [prefix, token] = authorization.split(" ");

        if (prefix !== PREFIX) {
            return res.status(401).json({ error: "User not authenticated" })
        }

        if (!token) {
            return res.status(401).json({ error: "User not authenticated" })
        }

        const payload = await verifyToken(token);
        if (!payload) {
            return res.status(401).json({ error: "User not authenticated" });
        }

        const userId = payload["sub"];

        //03 -  Verificar el usuario
        const user = await User.findById(userId);

        if (!user) {
            return res.status(401).json({ error: "User not authenticated" });
        }

        //debug({user}) -> comprobar si encuentra el usuario

        //04- Comparar el token con los token registrados
        const isTokenValid = user.tokens.includes(token);
        if (!isTokenValid) {
            return res.status(401).json({ error: "User not authenticated" });
        }

        //05_ modificar la req, para añadir la info del usuario
        req.user = user;
        req.token = token;

        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = middlewares;