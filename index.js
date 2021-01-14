const express = require('express');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser')
const routes = require('./routes/authRoutes.js');

const port = 4000


const router = express.Router();

routes(router);

require('dotenv').config();


const app = express()


mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }).then(() => {
  console.log('Database Connected Successfully');
}).catch((err) => {
  console.log('error in connecting database', err);
});


app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1', router);

app.get('/', (req, res)=> {
    res.send('Welcome to currency converter')
})


app.listen (port, () => {
    console.log('Server Started at Port 4000 ')
})

module.exports = app