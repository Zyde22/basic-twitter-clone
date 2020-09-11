const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

require('dotenv').config();

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) =>
    err ? console.error('Mongo err:', err) : console.log('[*] Db connected.')
);

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use('/api', require('./routes/api'));

app.listen(process.env.PORT, () =>
  console.log('[*] Listening on', process.env.PORT)
);
