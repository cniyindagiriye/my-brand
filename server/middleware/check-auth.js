import jsonwebtoken from "jsonwebtoken";

export default function checkAuth(req, res, next){
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jsonwebtoken.verify(token, "secret");
        req.userData = decoded;
        console.log(decoded);
        next();
    }catch(error){
        return res.status(401).json({
            message: 'Authentication failed'
        });
    }
}