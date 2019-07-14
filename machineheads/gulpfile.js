var gulp          = require('gulp'),
		gutil         = require('gulp-util' ),
		sass          = require('gulp-sass'),
		browserSync   = require('browser-sync'),
		concat        = require('gulp-concat'),
		uglify        = require('gulp-uglify'),
		cleancss      = require('gulp-clean-css'),
		rename        = require('gulp-rename'),
		autoprefixer  = require('gulp-autoprefixer'),
		notify        = require('gulp-notify'),
		imageResize   = require('gulp-image-resize'),
		imagemin      = require('gulp-imagemin'),
		del           = require('del'),
		pug 					= require('gulp-pug'),
		htmlbeautify  = require('gulp-html-beautify');

gulp.task('browser-sync', function() {
	browserSync({
		proxy: "machineheads.local/app",
		notify: false,
	})
});

gulp.task('styles', function() {
	return gulp.src('app/scss/**/*.scss')
	.pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
	// .pipe(rename({ suffix: '.min', prefix : '' }))
	.pipe(autoprefixer(['last 15 versions']))
	// .pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream())
});

gulp.task('scripts', function() {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/libs/jQuery.mmenu/dist/jquery.mmenu.all.js',
		// 'app/libs/owl.carousel/dist/owl.carousel.min.js',
		'app/libs/jQuery.equalHeights/jquery.equalheights.min.js',
		'app/libs/responsive-tabs/js/jquery.responsiveTabs.min.js',
		'app/libs/slick-carousel/slick/slick.js',
		'app/libs/select2/dist/js/select2.min.js',
		//'app/libs/fotorama/fotorama.js',
		//'app/libs/selectize/dist/js/standalone/selectize.min.js',
		'app/js/common.js', // Always at the end
		])
	.pipe(concat('scripts.js'))
	// .pipe(uglify()) // Mifify js (opt.)
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('code', function() {
	return gulp.src('../**/*.php')
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('pug', function() {
  return gulp.src("app/pug/pages/*.pug")
      .pipe(pug())
      .pipe(gulp.dest("app/"))
      .pipe(browserSync.reload({ stream: true }))
});

gulp.task('htmlbeautify', function() {
  var options = {
  	indentSize: 2,
		unformatted: [
      'abbr', 'area', 'b', 'bdi', 'bdo', 'br', 'cite',
      'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'ins', 'kbd', 'keygen', 'map', 'mark', 'math', 'meter', 'noscript',
      'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', 'small',
      'strong', 'sub', 'sup', 'template', 'time', 'u', 'var', 'wbr', 'text',
      'acronym', 'address', 'big', 'dt', 'ins', 'strike', 'tt'
    ]
  };
  gulp.src('app/*.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('app/'))
});

gulp.task('watch', function() {
	gulp.watch('app/scss/**/*.scss', gulp.parallel('styles'));
	gulp.watch(['app/libs/**/*.js', 'app/js/common.js'], gulp.parallel('scripts'));
	gulp.watch('app/pug/**/*.pug', gulp.parallel('pug'));
	// gulp.watch('app/*.html', gulp.parallel('code'));
});

gulp.task('default', gulp.parallel('pug', 'htmlbeautify', 'styles', 'scripts', 'browser-sync', 'watch'));

gulp.task('removedist', function(done) {
	var rem = del.sync('dist');
	done();
});

gulp.task('build', gulp.parallel('removedist', 'styles', 'scripts', function(done) {
	var buildFiles = gulp.src([
		'app/*.html',
		//'app/.htaccess',
		]).pipe(gulp.dest('dist'));

	var buildCss = gulp.src([
		'app/css/main.min.css',
		]).pipe(gulp.dest('dist/css'));

	var buildJs = gulp.src([
		'app/js/scripts.min.js',
		]).pipe(gulp.dest('dist/js'));

	var buildFonts = gulp.src([
		'app/fonts/**/*',
		]).pipe(gulp.dest('dist/fonts'));
	done();
}));
