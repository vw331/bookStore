
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	cancat = require('gulp-concat'),
	notice = require('gulp-notice'),
	notify = require('gulp-notify'),
	clean = require('gulp-clean'),
	webserver = require('gulp-webserver'),
	connect = require('gulp-connect')

var text = "/*auther:sunhao creat by2017/07/21*/"


gulp.task('clean', function(){

	return gulp.src('dist', {read: false})
		.pipe(clean())

})

gulp.task('sass', function(){

	gulp.src('src/sass/*.scss')
		.pipe(sass())
		.pipe(cancat('all.css'))
		.pipe(notice(text))
		.pipe(gulp.dest('dist/css'))
		.pipe(notify({message: 'css is ok'}))
		.pipe(connect.reload())

})	

gulp.task('concatJs', function(){

	gulp.src('src/js/**/*.js')
		.pipe(cancat('app.js'))
		.pipe(notice(text))
		.pipe(gulp.dest('dist/js'))
		.pipe(notify({message: 'js is ok'}))
		.pipe(connect.reload())

})

gulp.task('copy', function(){

	gulp.src('src/template/*')
	.pipe(gulp.dest('dist/template'))

})

gulp.task('watch', function(){

	gulp.watch('*.html',['default'])
	gulp.watch('src/sass/*.scss', ['default'])
	gulp.watch('src/template/*.html', ['default'])
	gulp.watch('src/js/**/*.js', ['default'])

})


gulp.task('webserver', function(){

	 connect.server({
	 	livereload: true,
	 });

})


gulp.task('default',['clean'], function(){

	gulp.start('sass','concatJs','copy')


})

gulp.task('dev',['default','webserver', 'watch'])