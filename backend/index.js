import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import { connectDB } from "./config/db.js";

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.use("/", (req, res, next) => {
  res.send("Book Store Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
