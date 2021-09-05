import express from "express";
const app = express();
import router from "./src/router.js";
import mongoClient from "./src/config/db.js";
import cors from "cors";
const PORT = 7000;

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

mongoClient();

app.use("/api/v2", router);

app.use("/", (req, res) => {
  res.send("You are at Search your fruit API");
});

app.listen(PORT, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log(`Server is running at http://localhost:${PORT}`);
});
