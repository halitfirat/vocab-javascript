const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Vocab = mongoose.model('vocabs');

module.exports = (app) => {
  app.get('/api/vocabs', requireLogin, async (req, res) => {
    const vocabs = await Vocab.find({ _user: req.user._id });

    res.send(vocabs);
  });

  app.post('/api/vocabs', requireLogin, async (req, res) => {
    const { native, foreign } = req.body;

    const vocab = new Vocab({
      native,
      foreign,
      _user: req.user._id
    });

    await vocab.save();

    res.send(vocab);
  });

  app.put('/api/vocabs/scored/:vocabId', async (req, res) => {
    const vocab = await Vocab.findOneAndUpdate(
      { _id: req.params.vocabId },
      {
        $inc: { score: 1 }
      },
      { new: true }
    );

    res.send(vocab);
  });

  app.put('/api/vocabs/:vocabId', async (req, res) => {
    const { native, foreign, score } = req.body;

    const vocab = await Vocab.findOneAndUpdate(
      { _id: req.params.vocabId },
      {
        native,
        foreign,
        score
      },
      { new: true }
    );

    res.send(vocab);
  });

  app.delete('/api/vocabs/:vocabId', async (req, res) => {
    await Vocab.deleteOne({ _id: req.params.vocabId });

    res.send({});
  });
};
