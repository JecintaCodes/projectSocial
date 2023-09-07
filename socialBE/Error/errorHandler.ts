import { HTTP, mainError } from "./mainError";
import {Response} from "express"

export const errFile = (err : mainError , res : Response) => {
     res.status(HTTP.BAD).json({
        name : err.name,
        message : err.message,
        status : err.status,
        success : err.success,
        stack : err.stack,
        err
    })
}

export const errHandler = (err : mainError , res : Response) => {
    errFile(err , res )
}