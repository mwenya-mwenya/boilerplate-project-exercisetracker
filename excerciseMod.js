let mongoose = require('mongoose');

let exerciseSchema =  new mongoose.Schema({
    user_id:String,
    username:String,
    description:String,
    duration:Number,
    date:String,
  
})

exerciseSchema.pre('save', function (next) {
    let now = new Date(Date.now()).toDateString();

    // Set a value for createdAt only if it is null
    if (this.date === "Invalid Date") {
        this.date = now;
    }

    // Call the next function in the pre-save chain
    next();
});

module.exports = new mongoose.model('exerciseUsersLogs', exerciseSchema);