const path = require('path');

module.exports = {
	entry: {
		Grades: {
			import: path.resolve(__dirname, 'index.js'),
			dependOn: ['Course', 'Users', 'Site']
		},
		GradesConsole: {
			import: path.resolve(__dirname, 'js/Console/index.js'),
			dependOn: ['Console', 'Course', 'Users', 'Site']
		}
	}
}
