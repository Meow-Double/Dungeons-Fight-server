import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";


const app = express();

app.use(express.json());
app.use(
  cors({
    origin: '*',
  }),
);

dotenv.config();

const PORT = Number(process.env.PORT);


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
