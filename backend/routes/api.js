const router = require('express').Router();
const tweetModel = require('../models/tweet');

router.get('/', (request, response) => {
  response.status(200).json({ success: true, message: 'Api up' });
});

router.post('/tweet/create', (request, response) => {
  const { username, tweet } = request.body;
  new tweetModel({ username, tweet })
    .save()
    .then(() =>
      response.status(201).json({ success: true, message: 'Tweet created !' })
    )
    .catch((err) =>
      response.status(400).json({ success: false, message: err.message })
    );
});

router.get('/tweet/all', (request, response) => {
  tweetModel.find({}, (err, tweets) =>
    err
      ? response.status(500)
      : response.status(200).json({ success: true, tweets })
  );
});

module.exports = router;
