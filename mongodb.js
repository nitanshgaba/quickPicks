const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://root:root@cluster0.vdtgzy1.mongodb.net/?retryWrites=true&w=majority")
.then( ()=> console.log('MongoDB connected'))
.catch( ()=> console.log('MongoDB failed to connect'))

const loginSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const Users = new mongoose.model('Users', loginSchema);

module.exports = Users;