var gulp = require('gulp');

var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// lint task
gulp.task('lint', function() {
    return gulp.src('angular-hashtagify.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// minify js
gulp.task('scripts', function() {
    return gulp.src('angular-hashtagify.js')
        .pipe(rename('angular-hashtagify.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./'));
});

// default task
gulp.task('default', ['lint', 'scripts']);
