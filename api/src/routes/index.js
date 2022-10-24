// const { Router } = require('express');
const express = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipesmid = require("./middelwares/recipes")
const {router} = require("./middelwares/diets")
const cors = require("cors")
const morgan=require("morgan")
const server = express();
const dietsmid = router
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use("/recipes",recipesmid);
server.use("/diets",dietsmid)
server.get("/",(req,res)=>{
    res.status(200).send("estamos")
})

module.exports = server;
