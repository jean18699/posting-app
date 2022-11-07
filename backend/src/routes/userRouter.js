const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const Message = require('../models/message')
const Token = require('../models/token')
const User = require('../models/user')


router.post('/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.username, req.body.password);
    const token = await Token.create({
      token: User.generateToken(user),
      userId: user.id
    })
   
    console.log(token.token)
    user.tokens = user.tokens.push(token);
    await user.save()

    res.send({user, token});
  } catch (error) {
    res.status(404).send(error.message)
  }
})


router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll({include: ['tokens']});
    res.send(users);
  } catch (error) {
    res.status(500).send(error)
  }
})

router.post('/users', async (req, res) => {
  try {
    const user = await User.create({
      ...req.body
    })
    res.status(201).send(user);
   
  } catch (error) {
    res.status(404).send(error);
  }
});

router.post("/users/me", auth, async(req, res)=>{
    try {

    }catch(error){
      res.status(404).send(error.message)
    }
});

router.post('/', async (req, res) => {
  res.send('POST request to the homepage')
})




module.exports = router;