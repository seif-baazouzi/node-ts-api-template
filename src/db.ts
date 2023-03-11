import mongoose from "mongoose"

mongoose.connect(process.env.DATABASE_URL as string)
const database = mongoose.connection

database.on("error", (error) => {
    console.error(error)
    process.exit(1)
})

database.once("connected", () => {
    console.log("Database Connected")
})

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
})

export const Data = mongoose.model("Data", dataSchema)
