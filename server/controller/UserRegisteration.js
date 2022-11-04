import { body, validationResult } from 'express-validator';

export const registerValidation = [
    body("name").isLength({min:2}),
    body("email").isEmail(),
    body("password").isLength({min:5})
]



export const registeration = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
    res.send(req.body)
}