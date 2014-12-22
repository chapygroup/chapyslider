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
    },
    jshint: {
        src: ['jquery.chapyslider.js']
    },
    watch:{
      jshint: {
              files: ['jquery.chapyslider.js'],
              tasks: ['jshint']
            },
      uglify:{
              files: ['jquery.chapyslider.js'],
              tasks: ['jshint']
         }
    }

  });

  // build
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['uglify','jshint']);
};