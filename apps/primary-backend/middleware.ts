import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"

export function authMiddlewere(req: Request,res: Response, next: NextFunction){
    const authHeader= req.headers.authorization; // Bearer token
    const token = authHeader && authHeader.split(" ")[1];

    if(!token){
        res.status(401).json({message:"unauthorized"});
        return
    }

    const decoded = jwt.verify(token, process.env.JWT_PUBLIC_KEY!,{
        algorithms:["RS256"]
    });                                                                   // ! => make red swiggly go away
    if(!decoded){
        res.status(401).json({message:"unauthorized"});
        return;
    }

    const userId = (decoded as any).sub;

    if(!userId){
        res.status(401).json({message:"unauthorized"});
        return;
    }

    req.userId = decoded.sub;
    next();
}