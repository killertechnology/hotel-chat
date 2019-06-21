const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const dtVisits = require('./data/schema-visits');
const dtCustomers = require('./data/schema-customers');
const dtMessage = require('./data/schema-message');
const API_PORT = 3001;
//const corsOptions = {   origin: 'http://localhost:3000' }
const corsOptions = {   origin: ['http://reactjs.flexui.com:3000','http://localhost:3000'] }

const app = express();
app.use(cors(corsOptions));
const router = express.Router();
const dbRoute = 'mongodb+srv://hotel-chat-usr:<<PASSWORD>@hotel-chat-t30zb.mongodb.net/hotel-chat?retryWrites=true&w=majority';
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(logger('dev'));

router.get('/getCheckins', (req, res) => {
  dtVisits.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.get('/getMessages', (req, res) => {
  dtMessage.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.get('/getCustomers', (req, res) => {
  dtCustomers.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.post('/updateData', (req, res) => {
  const { id, update } = req.body;
  dtVisits.findByIdAndUpdate(id, update, (err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.delete('/deleteData', (req, res) => {
  const { id } = req.body;
  dtVisits.findByIdAndRemove(id, (err) => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

router.post('/createCheckIn', (req, res) => {
  console.log(req.body);
  console.log(JSON.stringify(req.body));
  
  let data = new dtVisits();
  data.type = req.body.type;
  data.customer_id = req.body.customer_id;
  
  if ((!data.customer_id && data.customer_id !== 0) || !data.type) {
    return res.json({
      success: false,
      error: 'INVALID INPUTS',
    });
  }
  
  data.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});


router.post('/createMessage', (req, res) => {

  let dataMessage = new dtMessage();
  dataMessage.message = req.body.message;
  dataMessage.customer_id = req.body.customer_id;
  //const { customer_id, event_type } = req.body;

  if ((!dataMessage.customer_id && dataMessage.customer_id !== 0) || !dataMessage.message) {
    return res.json({
      success: false,
      error: 'INVALID INPUTS',
    });
  }
  
  dataMessage.save((err) => {
    if (err) {
      console.log(err)
      return res.json({ success: false, error: err });
    }
    return res.json({ success: true });
  });
});






// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));