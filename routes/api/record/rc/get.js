const express = require('express');
const router = express.Router();
let appRoot = require("app-root-path");
let path = appRoot.path;
const knex = require(`${path}/db`);

router.get('/api/record/rc/:rcId', async(req, res, next) => {
	let rcId = req.params.rcId;
	let record_list = await knex.table("records").where("rcId", rcId);
		
	return res.json({
		success: 1,
		record_list: record_list,
	});
});
router.get('/api/record/rc/name/:name', async(req, res, next) => {
	let name = req.params.name;
	let record_list = await knex.table("records as r")
		.join('rc', 'r.rcId', '=', 'rc.rcId').where("rc.name", name);
		
	return res.json({
		success: 1,
		record_list: record_list,
	});
});

module.exports = router;
