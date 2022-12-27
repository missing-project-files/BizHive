const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fetchuser = require('../middleware/fetchuser')

const secret = process.env.JWT_SECRET

// simple logger for this router's requests
// all requests to this router will first hit this middleware
router.use(function (req, res, next) {
    console.log(req.rawHeaders)
    console.log(req.body)
    console.log('INFO: method:%s, originalUrl:%s', req.method, req.originalUrl)
    next()
})

router.post(
    '/register',
    [
        body('email', 'Enter a valid Email').isEmail(),
        body('name', 'Enter a valid name').isLength({ min: 3 }),
        body('password', 'Password must be of atleast 5 characters').isLength({
            min: 5,
        }),
    ],
    async (req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            console.log(errors)
            let errorMsg = 'Validation failed'
            errors.array().forEach((error) => (errorMsg = error.msg))
            return res.status(400).json({ error: errorMsg })
        }

        try {
            let user = await User.findOne({ email: req.body.email })

            if (user) {
                return res.status(400).json({
                    success,
                    error: 'A user with this email already exist',
                })
            }

            let salt = bcrypt.genSaltSync(10)

            const secPass = bcrypt.hashSync(req.body.password, salt)

            user = await User.create({
                email: req.body.email,
                name: req.body.name,
                password: secPass,
            })
            const data = {
                user: {
                    id: user.id,
                },
            }

            let authtoken = jwt.sign(data, secret)

            const userInfo = {
                name: req.body.name,
                authtoken: authtoken,
            }

            console.log(
                'INFO: Response obj name:%s, authtoken:%s',
                userInfo.name,
                userInfo.authtoken
            )

            res.send({ userInfo })
        } catch (error) {
            console.log(error.message)
            res.status(500).send('Internal server error has occured')
        }
    }
)

// use postman to call GET http://brett.com/api/auth/servertime or http://localhost/api/auth/servertime
router.get('/servertime', async (req, res) => {
    try {
        res.send(String(new Date().toUTCString()))
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Internal server error has occured')
    }
})

module.exports = router
