import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT 

const app = express();

app.get(`/`, (req,res) => res.send(`server is running`))

app.listen(port, () => console.log(`server started on port ${port}`))