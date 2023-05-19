const express = require('express');
const router = express.Router();
let appRoot = require("app-root-path");
let path = appRoot.path;
const knex = require(`${path}/db`);

/* GET home page. */
router.delete('/api/rc/:rcId', async(req, res, next) => {
	let params =  req.params;
	if(!params.hasOwnProperty('rcId')) {
		return res.json({
			success: 0,
			message: "잘못된 params(rcId) 입니다."
		});
	}
	let rcId = params.rcId;
	
	console.log("rcId:" ,rcId);
	let rc = await knex.table("rc").where("rcId", rcId).first();
	if(!rc) {
		return res.json({
			success: 0,
			message: "이미 삭제된 탐지로봇이거나 잘못된 요청입니다. 새로고침 후 다시 시도해주세요.",
		});
	}
	await knex.table("rc").where("rcId", rcId).del();
		
	return res.json({
		success: 1,
		message: '성공적으로 삭제하였습니다.',
	});
});

module.exports = router;
