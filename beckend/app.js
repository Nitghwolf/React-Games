require("dotenv").config();

const express = require("express");
const path = require("path");
const expressConfig = require('./config/express');

const gamesApiRoutes = require("./routes/games.routes");

const app = express();
const PORT = process.env.PORT ?? 3500;

expressConfig(app);

app.use("/api/games", gamesApiRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.use((error, req, res, next) => {
    console.error('Произошла ошибка', error);
    res.status(500).json({
      success: false,
      message: 'Непредвиденная ошибка сервера, попробуйте зайти позже',
    });
});

app.listen(PORT, () => console.log(`server started at ${PORT}`));