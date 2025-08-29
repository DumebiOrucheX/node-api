import express from "express";
import messageRoutes from "./messageroutes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", messageRoutes);

const PORT = 5050;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});