const mongoose = require("mongoose")

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://varun:KmVLcXeFpyeqkUeb@cluster0.zqx15f6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
}

module.exports = connectDB 