import jwt from "jsonwebtoken";
import { promisify } from "util";
import authConfig from "../../config/auth";

export default async (req, res, next) => {
    const authHeader = req.headers.authorization;

    
    if (!authHeader) {
        return res.status(401).json({ message: "Para acessar este serviço é necessário estar logado" });
    }

    const [,token] = authHeader.split(' ');

    try{
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);
        req.userId = decoded.id;
        
        next();
    } catch (error) {
        return res.status(401).json({ message: "Token inválido" });
    }

}