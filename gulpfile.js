const gulp = require('gulp');
const sass = require('gulp-sass');

// set up come simple tasks for Gulp to run

function compile(done) {
    gulp.src("sass/**/*.scss")
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(gulp.dest("css"))
}

exports.compile = compile