/*global module */
module.exports = function( grunt ) {
  
  'use strict';

  grunt.initConfig({

    uglify: {
      dist: {
        files: {
          'build/jquery.chapyslider.min.js': 'jquery.chapyslider.js'
        }
      }
    }

  });

  // build
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.registerTask('default', 'build');
};