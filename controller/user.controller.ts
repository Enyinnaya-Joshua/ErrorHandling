import {Response, Request} from "express"
import userData from "../model/user.model"
import bcrypt from "bcrypt"

export const Register = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {fullname, isAdmin, stack, email, password} = req.body

        const salt: string = await bcrypt.genSalt(10);

        const hashName = await bcrypt.hash(fullname, salt)
        const hashPassword = await bcrypt.hash(password, salt)

        const user = await userData.create({
            isAdmin,
            password: hashPassword,
            email,
            fullname: hashName,
            stack
        })

        return res.status(401).json({
            status: ""
        })


    } catch (error) {
        return res.status(400).json({
            status: "an error occured",
            data: error
        })
    }
}