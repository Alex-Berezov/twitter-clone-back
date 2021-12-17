import { body } from 'express-validator'

export const registerValidations = [
  body('email', 'Enter e-mail').isEmail().withMessage('Wrong e-mail').isLength({
    min: 5,
    max: 50,
  }).withMessage('Wrong e-mail length. Min 5 - 50 symbols'),
  body('fullname', 'Enter fullname').isString().isLength({
    min: 2,
    max: 50,
  }).withMessage('Wrong name length. Min 2 - 50 symbols'),
  body('username', 'Enter login').isString().isLength({
    min: 2,
    max: 50,
  }).withMessage('Wrong login length. Min 2 - 50 symbols'),
  body('passward', 'Enter passward').isString().isLength({
    min: 4,
    max: 50,
  }).withMessage('Wrong passward length. Min 4 - 50 symbols')
    .custom((value, { req }) => {
      if (value !== req.body.passward2) {
        throw new Error('Passwords don\'t match')
      } else {
        return value
      }
    })
]