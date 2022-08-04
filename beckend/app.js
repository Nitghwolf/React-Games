require("dotenv").config();

const express = require("express");
const path = require("path");
const expressConfig = require('./config/express');


const app = express();
const PORT = process.env.PORT ?? 3000;

expressConfig(app);

app.use((error, req, res, next) => {
    console.error('Произошла ошибка', error);
    res.status(500).json({
      success: false,
      message: 'Непредвиденная ошибка сервера, попробуйте зайти позже',
    });
});

app.listen(PORT, () => console.log(`server started at ${PORT}`));