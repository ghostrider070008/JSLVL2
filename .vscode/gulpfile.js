// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(cb) {
    gulp.src('*.scss')
        .pipe(sass())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }));
    cb();
});

gulp.task('default', gulp.series('sass', function(cb) {
    gulp.watch('*.scss', gulp.series('sass'));
    cb();
}));
// Less configuration
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function(cb) {
    gulp.src('*.less')
        .pipe(less())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }));
    cb();
});

gulp.task('default', gulp.series('less', function(cb) {
    gulp.watch('*.less', gulp.series('less'));
    cb();
}));