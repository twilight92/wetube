import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import "core-js";
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from home");

const handleProfile = (req, res) => res.send("Hello from profile");

app.use(morgan("dev"))

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);