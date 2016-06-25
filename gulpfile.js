"use strict";

var gulp = require('gulp'),
        autoprefixer = require('gulp-autoprefixer'),
        livereload = require('gulp-livereload'),
        connect = require('gulp-connect'),
        imagemin = require('gulp-imagemin'),
        htmlmin = require('gulp-htmlmin'),
        minifyCSS = require('gulp-minify-css');

    gulp.task('connect', function () {
        connect.server({
            root: '',
            livereload: true
        });
    });

    //css
    gulp.task('css', function () {
        gulp.src('css/style.css')
            .pipe(autoprefixer('last 7 versions'))
            .pipe(minifyCSS('style.css'))
            .pipe(gulp.dest('app/css'))
            .pipe(connect.reload());
    });
    //@media
    gulp.task('cssmedia', function () {
        gulp.src('css/media.css')
            .pipe(autoprefixer('last 7 versions'))
            .pipe(minifyCSS('media.css'))
            .pipe(gulp.dest('app/css'))
            .pipe(connect.reload());
    });
    //bootstrap
    gulp.task('bcss', function() {
    	gulp.src('css/bootstrap.min.css')
    	.pipe(gulp.dest('app/css'))
    });
    //font-awesome
    gulp.task('font-awesome', function() {
        gulp.src('css/font-awesome.min.css')
        .pipe(gulp.dest('app/css'))
    });



    //js
    gulp.task('js', function() {
    	gulp.src('js/bootstrap.min.js')
    	.pipe(gulp.dest('app/js'))
    });

    //html
    gulp.task('html', function () {
        gulp.src('*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('app/'))
        .pipe(connect.reload());
    });

    //image
   	gulp.task('img', () => {
        gulp.src('img/*')
        .pipe(imagemin({
            progressive: true}))
        .pipe(gulp.dest('app/img'))
        .pipe(connect.reload());
    });

   //fonts
   	gulp.task('fonts', function() {
    	gulp.src('fonts/*')
        .pipe(gulp.dest('app/fonts'))
    });


    //watch
    gulp.task('watch', function () {
        gulp.watch('css/style.css', ['css'])
        gulp.watch('*.html', ['html'])
    });

    //default
    gulp.task('default', ['connect', 'html', 'css', 'bcss', 'font-awesome', 'cssmedia', 'js','img', 'fonts','watch']);
