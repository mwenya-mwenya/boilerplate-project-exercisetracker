let mongoose = require('mongoose');

let nameSchema = new mongoose.Schema({
  
  username:String,
  
  
});

module.exports = new mongoose.model('exerciseUsersName', nameSchema);