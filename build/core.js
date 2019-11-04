'use strict';

var gulp        = require('gulp');
var clean       = require('gulp-clean');
var resources   = require('./tasks/resources');
var network     = require('./tasks/network');
var bastion     = require('./tasks/bastion');
var requireDir  = require('require-dir');

gulp.task('cfn:clean', function() {
    console.log('Cleaning the dist folder');
    return gulp.src(['dist/*', '!dist/.gitkeep'], {read: false})
        .pipe(clean());
});

gulp.task('cfn:build', gulp.series('cfn:clean', function() {
    console.log('Building the packages...');
    return resources();
        //.pipe(network())
        //.pipe(bastion());
}));

gulp.task('cfn:publish', function() {

});

gulp.task('default', gulp.parallel('cfn:build'));