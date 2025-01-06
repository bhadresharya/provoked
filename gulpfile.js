var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'docs'
        }
    })
})

gulp.task('sass', async function () {
    return gulp.src('docs/scss/**.scss')
        .pipe(sass())
        .pipe(gulp.dest('docs/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
})

gulp.task('watch', gulp.parallel('browserSync', function () {
    gulp.watch('docs/scss/**.scss', gulp.series('sass'));
    gulp.watch('docs/*.html').on('change', browserSync.reload);
}))