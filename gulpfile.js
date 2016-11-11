var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var ghPages = require('gulp-gh-pages');

gulp.task('concat', function(){
  return gulp.src('./source/js/**/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/javascript'))
})


gulp.task('sass', function(){
  return gulp.src('./source/scss/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['> 1%','last 2 version'],
      cascade: false
    }))
    .pipe(gulp.dest('./public/stylesheets'))
})

var vendorjs = [
  'vendors/jquery/dist/jquery.min.js',
  'vendors/vue/dist/vue.min.js'
]

gulp.task('vendor', function() {
  return gulp.src(vendorjs)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./public/javascript'))
})

gulp.task('watch', function(){
  gulp.watch('./source/js/**/*.js', ['concat'])
  gulp.watch('./source/scss/**/*.scss', ['sass'])
})

gulp.task('deploy', function() {
  return gulp.src('./public/**/*')
    .pipe(ghPages());
});

gulp.task('default',['concat', 'sass','vendor', 'watch'])
