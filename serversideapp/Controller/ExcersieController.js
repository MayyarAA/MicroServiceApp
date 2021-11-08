import express from 'express';
const router = express.Router();
import Exercise from '../Model/ExcersieModel.js';
// let Exercise = require('../Model/ExcersieModel');

router.route('/add').post((req, res) => {
	const username = req.body.username;
	const description = req.body.description;
	const duration = Number(req.body.duration);
	// const date = Date.parse(req.body.date);

	const newExercise = new Exercise({
		username,
		description,
		duration,
		//date,
	});

	newExercise
		.save()
		.then(() => res.json('Exercise added!'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

// module.exports = router;
export { router as exercisesRouter };
//"date" : "01 Jan 1970 00:00:00 GMT"
