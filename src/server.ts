import express from "express"
import bodyParser from "body-parser"

import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT ?? 4000

const app = express()
app.use(bodyParser.json())

app.use(require("./routes/data"))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
