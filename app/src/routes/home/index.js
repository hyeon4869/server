"use strict";

const express = require("express");
const router =express.Router();
const ctrl =require("./home.ctrl"); //불러오기

router.get("/", ctrl.home);//화면 출력
router.get("/login",ctrl.login);//로그인 출력

module.exports=router;