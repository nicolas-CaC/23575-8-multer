import { body } from 'express-validator'

export const loginMiddleware = [
    body('email').isEmail().withMessage('mail inválido'),
    body('password').isLength({ min: 4 }).withMessage('debe tener al menos 4 caracteres')
]