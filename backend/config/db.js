import mongoose from "mongoose"

const URL = process.env.MONGO_URI || "mongodb://arnav_sys:aa1aa2sam3@cluster0-shard-00-00.iqnbd.mongodb.net:27017,cluster0-shard-00-01.iqnbd.mongodb.net:27017,cluster0-shard-00-02.iqnbd.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-fq1v00-shard-0&authSource=admin&retryWrites=true&w=majority"



const connectDB = async () => {
    try {
        const conn = await mongoose.connect(URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        })
        console.log(URL)
        console.log("MongoDB Connected: " + conn.connection.host)
    }catch(error){
        console.log(error.message)
        process.exit(1)
    }
}

export default connectDB