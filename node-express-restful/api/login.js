const express = require('express')
const router = express.Router()
import member from '../domain/member'
const db = require('../db/database')

router.post('/login', (req, res, next) => {
    let Member = new member(req.body.email, req.body.password)
    console.log(Member.getLoginSql());
    
    if(Member.getLoginSql() == 0){
        res.json({
            status:"登入失敗",
            message:"沒有此帳號"
        })
        return
    }else{
        res.json({
            status:"登入成功",
            message:"歡迎你回來"
        })
    }

    })
    // router.post('/', function(req, res){

    // })

module.exports = router


