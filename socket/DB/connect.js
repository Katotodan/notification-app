import mongoose from 'mongoose'
const connectDb = async() =>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/notificationApp')
        console.log("connected to the db")
    } catch (error) {
        console.log("Something went wrong with the Db")
    }
}
export default connectDb

