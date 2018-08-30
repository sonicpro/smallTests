module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		traceur: {
			custom: {
				files:{
					'js/': ['rest-spread.js'] // dest: file to compile
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-traceur');
	grunt.registerTask('default', ['traceur']);
};
