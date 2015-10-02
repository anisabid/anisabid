"use strict";

var PATH = require('../workflow.config').PATH;

module.exports = function (gulp, plugins) {
  return function () {
    return gulp.src(PATH.src.lib)
      .pipe(plugins.uglify())
      .pipe(plugins.concat('lib.min.js'))
      .pipe(gulp.dest(PATH.dest.prod.lib));
  };
};
