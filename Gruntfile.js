/*
 * grunt-modules-version-check
 *
 * Copyright (c) 2016 FrendEr
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Configuration to be run (and then tested).
    modules_version_check: {
      main: {
        options: {
          update: false,
          match: /gru/
        }
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['modules_version_check']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);

};
