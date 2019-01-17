var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    minify = require('gulp-minify'),
    cssnano = require('gulp-cssnano');

gulp.task('styles', function() {
  return gulp.src('./Assets/dev/less/main.less')
    .pipe(less())
    .pipe(autoprefixer('last 4 version'))
    .pipe(gulp.dest('./Assets/build/css/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest('./Assets/build/css/'));
});

gulp.task('js', function(){
  return gulp.src('./Assets/dev/js/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.min.js'
        }
      }))
    .pipe(gulp.dest('./Assets/build/js'));
});

gulp.task('header', function(){
  console.log('|------------------------------------------------------|');
  console.log('|                                                      |');
  console.log('|               COLOR RUN ASSETS BUILDING              |');
  console.log('|       Commands : styles, imgs, js, build, watch      |');
  console.log('|            Made with <3 by lucas-trebouet.fr         |');
  console.log('|                                                      |');
  console.log('|------------------------------------------------------|');
});

gulp.task('build', ['header', 'styles', 'js']);

gulp.task('watch', ['build'], function() {
  gulp.watch('./Assets/dev/less/main.less', ['styles']);
  gulp.watch('./Assets/dev/js/*.js', ['js']);
});
