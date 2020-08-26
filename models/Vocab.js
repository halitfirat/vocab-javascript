const mongoose = require('mongoose');
const { Schema } = mongoose;

const vocabSchema = new Schema({
  native: String,
  foreign: String,
  score: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('vocabs', vocabSchema);
