import express from "express"
import cors from "cors"
import Router from "./routes/routes.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: false
  }));
app.use(cors())
app.use(Router)

app.listen(3000, () => console.log('Server running at http://localhost:3000'))


