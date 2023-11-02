const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const bcrypt = require('bcryptjs');
const bcryptSalt = bcrypt.genSaltSync(10);
const User = require('./models/Users.js');

app.use(express.json());
require('dotenv').config();

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  })
);

mongoose.connect(process.env.MONGO_URL);



app.get('/test', (req, res) => {
  res.json('test ok');
});

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    })
    res.json(userDoc);;
  } catch (e) {
    res.status(422).json(e);

  }

});

app.post('/api/login', async (req, res) => {
  // mongoose.connect(process.env.MONGO_URL);
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    res.json('found')
    // const passOk = bcrypt.compareSync(password, userDoc.password);
    // if (passOk) {
    //   jwt.sign({
    //     email: userDoc.email,
    //     id: userDoc._id
    //   }, jwtSecret, {}, (err, token) => {
    //     if (err) throw err;
    //     res.cookie('token', token).json(userDoc);
    //   });
    // } else {
    //   res.status(422).json('pass not ok');
    // }
  } else {
    res.json('not found');
  }
});

app.listen(4000);
