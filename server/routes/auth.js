const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchuser');

// simple logger for this router's requests
// all requests to this router will first hit this middleware
router.use(function (req, res, next) {
  console.log(req.rawHeaders);
  console.log(req.body);
  console.log('INFO: method:%s, originalUrl:%s', req.method, req.originalUrl);
  next();
});

router.post(
  '/register',
  [
    body('email', 'Enter a valid Email').isEmail(),
    body('name', 'Enter a valid name').isLength({ min: 3 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        console.error(errors);
        let errorMsg = 'Validation failed';
        errors.array().forEach(error => (errorMsg = error.msg));
        return res.status(400).json({ error: errorMsg });
      }

      const { email, password, name } = req.body;

      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

      if (!passwordRegex.test(password)) {
        return res.status(400).json({
          error:
            'Password must be at least 8 characters long and contain at least one letter, one number, and one special character',
        });
      }

      let user = await User.findOne({ email: email });

      if (user) {
        return res.status(400).json({
          error: 'A user with this email already exist',
        });
      }

      let salt = bcrypt.genSaltSync(10);

      const hashedPassword = bcrypt.hashSync(password, salt);

      user = await User.create({
        email: email,
        name: name,
        password: hashedPassword,
      });

      const payload = {
        userId: user._id,
        email: user.email,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        algorithm: 'HS256',
        expiresIn: '1h',
      });

      const userInfo = {
        name: name,
        token: token,
      };

      console.log(
        'INFO: Response obj name:%s, auth-token:%s',
        userInfo.name,
        userInfo.token
      );

      res.json({ userInfo });
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal server error has occurred');
    }
  }
);

// use postman to call GET http://brett.com/api/auth/servertime or http://localhost/api/auth/servertime
router.get('/server-time', async (req, res) => {
  try {
    res.send(String(new Date().toUTCString()));
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Internal server error has occured');
  }
});

router.post(
  '/login',
  [
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password cannot be blank').notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.error(errors);
      let errorMsg = 'Validation failed';
      errors.array().forEach(error => (errorMsg = error.msg));
      return res.status(400).json({ error: errorMsg });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: 'Please login using correct credentials' });
      }
      let passwordCompare = await bcrypt.compare(password, user.password);

      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: 'Please login using correct credentials' });
      }

      const payload = {
        userId: user._id,
        email: user.email,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        algorithm: 'HS256',
        expiresIn: '1h',
      });

      const userInfo = {
        name: user.name,
        token: token,
      };

      console.log(
        'INFO: Response obj name:%s, auth-token:%s',
        userInfo.name,
        userInfo.token
      );

      res.json({ userInfo });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error has occurred');
    }
  }
);

module.exports = router;
