/*
 * @Author: chen yang
 * @Date: 2020-08-27 09:28:09
 * @Last Modified by: chen yang
 * @Last Modified time: 2020-08-27 14:51:32
 */
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const cors = require("cors");
const booksRouter = require("./routes/api/books");
connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Hello Voyager!"));

app.use("/api/books", booksRouter);

const PORT = process.env.PORT || 8082;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
