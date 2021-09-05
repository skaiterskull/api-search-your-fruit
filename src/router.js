import express, { Router } from "express";
const router = express.Router();
import { displayAllList, insertData } from "../src/models/SearchFruit.model.js";

router.get("/", async (req, res) => {
  try {
    const result = await displayAllList();
    res.json({
      status: "Fetching data success",
      message: "Fecthing data success",
      result,
    });
  } catch (error) {
    res.json({
      status: "Error",
      message: "Fetching data failed",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const result = await insertData(req.body);

    res.json({
      status: "Success",
      message: "Insert data success",
      result,
    });
  } catch (error) {
    res.json({
      status: "Error",
      message: "Insert data failed",
    });
  }
});

export default router;
