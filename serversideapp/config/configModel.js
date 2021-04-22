const dotenv = require('dotenv');
dotenv.config();
module.exports = {
	databaseConenctionString: process.env.ATLAS_URI,
};
