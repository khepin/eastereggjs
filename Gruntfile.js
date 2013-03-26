/**
 * To use grunt, refer to http://gruntjs.com/
 */
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: ['*.js', 'specs/**/*.js']
    },
    clean: {
      build: ['build/']
    },
    uglify: {
      build: {
        src: ['easteregg.js'],
        dest: './build/easteregg.min.js'
      }
    },
    jasmine: {
      specs: {
        src : 'easteregg.js',
        options: {
          specs: 'specs/specs.js',
          vendor: 'components/jquery/jquery.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task.
  grunt.registerTask('default', 'jshint');
  grunt.registerTask('spec', 'jasmine-server');
  grunt.registerTask('build', ['jshint', 'clean', 'uglify']);
};