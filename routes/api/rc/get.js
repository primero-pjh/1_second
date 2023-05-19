const express = require('express');
const router = express.Router();
let appRoot = require("app-root-path");
let path = appRoot.path;
const knex = require(`${path}/db`);

router.get('/api/rc', async(req, res, next) => {
	let rc_list = await knex.table("rc");
		
	return res.json({
		success: 1,
		rc_list,
	});
});

router.get('/api/rc/name_list', async(req, res, next) => {
	let name_list = req.query.name_list.split(",");
	let rc_list = await knex.table("rc").whereIn("name", name_list);
		
	return res.json({
		success: 1,
		rc_list,
	});
});

module.exports = router;
