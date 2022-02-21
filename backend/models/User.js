
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  githubId: {
    type: String
  },
  googleId: {
    type: String
  },
  spotifyId: {
    type: String
  },
  displayName: {
    type: String
  },
  photo: {
      type: String
  }
});

module.exports = mongoose.model('User', UserSchema)