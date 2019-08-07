// Gulp plugins
const gulp = require('gulp');
const sass = require('gulp-sass');
const minify = require('gulp-clean-css');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

// Sources
const SCSS_SOURCE = './src/scss/*.scss';
const JS_SOURCE = './src/js/**/*.js';
const HTML_SOURCE = './public/*.html';

const SCSS_DEST = './public/css';
const ROOT = './public'

// Compile SCSS into CSS
function style() {
    // 1. Find scss file
    return gulp.src(SCSS_SOURCE) 
    // 2. Pass file through a SCSS compiler
    .pipe(sass().on('error', sass.logError))
    .pipe(minify())
    .pipe(rename({suffix: '.min'}))
    // 3. Save compiled CSS to destination
    .pipe(gulp.dest(SCSS_DEST))
    // 4. Stream changes to all browsers
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: ROOT
        }
    });
    gulp.watch(SCSS_SOURCE, style);
    gulp.watch(HTML_SOURCE).on('change', browserSync.reload);
    gulp.watch(JS_SOURCE).on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;