import express from "express";

const router = express.Router();
router.get("/message", async (req, res) => {
  res.json({ message: "Welcome to Project Genesis" });
});

export default router;
