
var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync').create();

gulp.task('hello', function(){
    console.log("Hello gulp");
});


gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
});

gulp.task('watch',['browserSync','sass'], function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
})

gulp.task('browserSync', function(){
    bs.init({
        server: {
            baseDir: 'app'
        },
    })
})
