const gulp = require('gulp');
const css = require('gulp-mini-css');
const uglify = require('gulp-uglify');
const pump = require('pump');
const htmlmin = require('gulp-htmlmin');
const wait = require('gulp-wait');
require('events').EventEmitter.prototype._maxListeners = 100;
var argv = require('yargs').argv;


gulp.task('default', ['images','css', 'js', 'html','mail','pdf']);

gulp.task('css', function(){
    gulp.src(['../css/agency.css','../css/bootstrap.min.css','../css/style.css'])
        .pipe(css({ext:'.css'}))
        .pipe(gulp.dest('../../dist/css'));
});

gulp.task('js', function (cb) {
  pump([
        gulp.src(['../js/jquery.js','../js/bootstrap.min.js','../js/classie.js','../js/cbpAnimatedHeader.min.js','../js/jqBootstrapValidation.js','../js/contact_me.js','../js/agency.min.js']),
        uglify(),
        gulp.dest('../../dist/js')
    ],
    cb
  );
});

gulp.task('html', function() {
  return gulp.src('../index.html')
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe(gulp.dest('../../dist/'));
});

gulp.task('images', function() {
    return gulp.src('../images/**')
        .pipe(gulp.dest('../../dist/images'));
});

gulp.task('mail', function() {
    return gulp.src('../mail/*')
        .pipe(gulp.dest('../../dist/mail'));
});

gulp.task('pdf', function() {
    return gulp.src('../pdf/*')
        .pipe(gulp.dest('../../dist/pdf'));
});

// use in Command Line:
// npm install
// gulp