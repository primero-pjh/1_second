const express = require('express');
const router = express.Router();
let appRoot = require("app-root-path");
let path = appRoot.path;
const knex = require(`${path}/db`);

/* GET home page. */
router.put('/api/admin/login', async(req, res, next) => {
	let params = req.body.params;
	let userId = params.userId;
	let password = params.password;
	let error = new Object();
	
	if(!userId) {
		error["userId"] = "필수입력 항목입니다.";
	}
	if(!password) {
		error["password"] = "필수입력 항목입니다.";
	}
	if(Object.keys(error).length > 0) {
		return res.json({
			success: 0,
			error: error
		});
	}
	
	let user = await knex.table("user").where("password", password).andWhere("userId", userId).first();
	
	if(!user) {
		return res.json({
			success: 0,
			message: "해당 유저는 존재하지 않습니다.",
		});
	}
		
	return res.json({
		success: 1,
	});
});

module.exports = router;
