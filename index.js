


const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'pug')

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var session = require('express-session')

let userObject = {admin: true, name: "Mans"}
let notificationObject = {show: false, message: "This is a test"}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.get('/dashboard', (req, res) => {
  let controllerObject={
    title:"title",
    message:"message",
    user : userObject,
    notification: notificationObject
  }
  res.render('dashboard', controllerObject)
})
app.post('/login', (req, res) => {
  
  const fire = import("./login.mjs");
  console.log(req.body)
//  req.session.views = fire.loginUser();
})
app.get('/', (req, res) => {
  let controllerObject={
    title:"title",
    message:"message",
    user : userObject,
    notification: notificationObject
  }
  res.render('index', controllerObject)
})