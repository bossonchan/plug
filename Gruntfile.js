module.exports = function (grunt) {
  grunt.initConfig({
    clean: ['lib'],
    simplemocha: {
      all: {
        src: ['test/**/*.test.js'],
        options: {
          reporter: 'spec'
        }
      }
    },
    livescript: {
      src: {
        files: [{
          expand: true,
          flatten: false,
          cwd: 'src/',
          src: '**/*.ls',
          dest: 'lib/',
          ext: '.js'
        }]
      }
    }
  });
  grunt.loadNpmTasks("grunt-simple-mocha");
  grunt.loadNpmTasks("grunt-livescript");
  grunt.loadNpmTasks("grunt-contrib-clean");

  grunt.registerTask("test", ['simplemocha']);
  grunt.registerTask("default", ['clean', 'livescript']);
}
