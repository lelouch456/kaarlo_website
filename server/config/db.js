const mongoose = require('mongoose');

MONGO_URI="mongodb://127.0.0.1:27017/website" 


const connectDB = async()=>{
    try {
        await mongoose.connect(MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...');
    } catch(error){
        console.error('Error Connecting to MongoDB',error);
        process.exit(1);
    }
};
module.exports=connectDB