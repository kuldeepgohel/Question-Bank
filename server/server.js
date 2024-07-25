import dotenv from 'dotenv'
dotenv.config();
import express from "express";
const app = express();
import PostRoutes from "./routes/post.route.js";
import { connectionWithMongoose } from "./db/connection1.db.js";
import cors from 'cors'

connectionWithMongoose();
app.use(cors({
  origin:['http://localhost:5173']
}));
 
//middle ware
app.use(express.json()); // for convert string type data into object type
app.use(express.urlencoded({ extended: true })); //for handing form input

app.use("/api/v1", PostRoutes);

app.listen(8000, () => {
  console.log("server is listening on 8000");
});
