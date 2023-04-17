import express from "express";
const app = express();
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likesRoutes from "./routes/likes.js";
import { db } from "./connect.js";
import cors from "cors";
import cookieParser from "cookie-parser";

//middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likesRoutes);

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL server");
});

app.listen(8800, () => {
  console.log("coonected to backend-8800");
});

app.get("/", (req, res) => {
  res.json("Hello this is backend");
});