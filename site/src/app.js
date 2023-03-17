require("dotenv").config({path:"../.env"});
const express = require("express")
const createApp = require("./config/create-app");
const appConfig = require("./config/app-config");


// CREATE EXPRESS APP
const app = createApp();

appConfig.config(app);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const mainRouter = require("./routers/main-router");

// MOUNT MAIN ROUTER

app.use(mainRouter);

