'use strict';

var modulesVersionCheck = require('modules-version-check');

module.exports = function(grunt) {

  grunt.registerMultiTask('modules_version_check', 'module version check', function() {
    var done = this.async();
    var options = this.options({
      update: grunt.option('update'),
      match: grunt.option('match')
    });

    modulesVersionCheck(options, function() {
      done();
    });
  });

};
