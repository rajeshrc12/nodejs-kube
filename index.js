import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello World from NodeJS on GKE!"));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
