const { default: mongoose } = require("mongoose");

const connect = mongoose.connect("mongodb+srv://happy:happy@cluster0.eilwp1z.mongodb.net/?retryWrites=true&w=majority");


module.exports = connect;