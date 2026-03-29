import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import authRoutes from "./routes/auth.routes.js"
import userRoutes  from "./routes/user.routes.js"

dotenv.config()

const app = express()

app.use(cors({ origin: "*" }))
app.use(express.json())

app.use("/auth", authRoutes)

app.use("/users", userRoutes)

app.get("/", (req, res) => {
  return res.json({ message: "API running" })
})

app.listen(8080, () => {
  console.log("Server running on http://localhost:8080")
})