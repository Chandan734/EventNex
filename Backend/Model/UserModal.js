const mongoose =require('mongoose');

const userSchema =new mongoose.Schema({
    Name:{type:String, required: true,trim:true,min:5, max:20},
    Email: { type: String, required: true, unique: true },
    Number: { type: Number, required: true },
    Subject:{type:String, required: true,trim:true, max:20},
    Massage:{type:String, required: true,trim:true,min:5, max:30},
});

// Define the model
const User = mongoose.model('User', userSchema);

// Export the model correctly
module.exports = User;
