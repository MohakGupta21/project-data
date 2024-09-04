import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { addMovie, deleteMovie, getAllMovies, updateMovies } from "./Controllers/MovieController.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

mongoose
  .connect(process.env.MONGODB)
  .then(() => app.listen(process.env.PORT, () => console.log("Listening")))
  .catch((err) => console.log(err));

app.get("/movies", getAllMovies);

app.put("/movies/:id", updateMovies);

app.post("/movies", addMovie);

app.delete("/movies/:id", deleteMovie);
