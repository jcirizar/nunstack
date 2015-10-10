'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  mqpacker = require('css-mqpacker'),
  csswring = require('csswring'),
  livereload = require('gulp-livereload');

gulp.task('sass', function() {
  var processors = [
    autoprefixer({
      browsers: ['last 4 versions']
    }),
    mqpacker,
    csswring
  ];

  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});


gulp.task('default', function() {
  livereload.listen();
  gulp.watch('./sass/**/*.scss', ['sass'])
});
