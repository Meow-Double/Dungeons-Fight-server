require('dotenv').config();
const express = require('express');
const cors = require('cors');
const models = require("./models/models")
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHadlingMiddleware");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: '*',
  }),
);
app.use("/api", router)

app.use(errorHandler)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
