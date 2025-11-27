const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./utils/db");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

connectDB();

app.get("/", (req, res) => {
    res.send("Portfolio Contact API Running");
});

app.use("/api/contact", require("./routes/contactRoutes"));

app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
);
