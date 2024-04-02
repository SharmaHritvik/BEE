import { NextFunction, Request, Response } from "express";

export default function userAuth(req: Request, res: Response, next: NextFunction) {
    if (req.session && req.session.user) {
        next();
    }
    else {
        res.redirect('/login');
    }
}
