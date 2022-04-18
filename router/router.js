const express = require("express")
const { hackathon } = require("../controller/connection")

const router = express.Router()

router.post("/postdata",hackathon)

module.exports=router
