const path = require('path');

module.exports = {
	entry: {
		Grades: {
			import: path.resolve(__dirname, 'index.js'),
			dependOn: ['Course', 'Users', 'Site']
		}
	}
}
