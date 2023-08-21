import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import connectDB from "./config/db.js";

dotenv.config();
const port = process.env.PORT 
const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes)

app.get(`/`, (req,res) => res.send(`server is running`))

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`))