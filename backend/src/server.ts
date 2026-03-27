import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const app = express()

app.use(cors({ origin: "*" }))
app.use(express.json())

app.get("/", (req, res) => {
  return res.json({ message: "API running nova" })
})

app.listen(8080, () => {
  console.log("Server running on http://localhost:8080")
})