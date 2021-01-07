const gulp = require('gulp');
const clean = require('gulp-clean');
const plumber = require("gulp-plumber");
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const nodemon = require('gulp-nodemon');
const ts = require('gulp-typescript');

const config = require('./gulp/config.js');
const tsProject = ts.createProject('tsconfig.json');

// Tarea que borra el directorio destino
gulp.task(config.clean.name, () => {
	return gulp.src(config.clean.src, {allowEmpty: true, read: false})
        .pipe(plumber())
        .pipe(clean());
});

// Tarea que se ejecuta cuando se detectan cambios
gulp.task('compile', () => {
    const tsResult = tsProject.src().pipe(tsProject());
    return tsResult.js.pipe(gulp.dest(config.server.tmp));
});

gulp.task('compress', () => {
    return gulp.src(config.server.jsSrc)
        .pipe(terser())
        .pipe(gulp.dest(config.server.dest))
});

gulp.task('clean:temporal', () => {
	return gulp.src(config.server.tmp, {allowEmpty: true, read: false})
		.pipe(plumber())
		.pipe(clean());
});

gulp.task('start', async () => {
	let stream = nodemon({
		exec: 'node --inspect=9230',
		script: config.server.src,
		ext: 'js',
		env: {
			'NODE_ENV': 'development',
			'DB_TYPE': 'oracle',
			'DB_HOST': "10.3.5.134",
			'DB_PORT': '1521',
			'DB_USER': "MF_PREST",
			'DB_PASSWORD': "jp6gqJBZ9Xmg2YCm",
			'DB_SID': 'sume12c',
			'DB_NAME': 'MF_PREST',
			'HOST_ASOCIADOS': 'http://sume3-test.apps.openshift.ase.local:80',
			'HOST_ENGAGE': 'http://localhost:8093'
		}
	
	});

	stream.on('crash', function(){
		console.error('Application has crashed!\n');
		stream.emit('restart', 10);  // restart the server in 10 seconds
	})
});


gulp.task('build', gulp.series('compile', 'compress', 'clean:temporal'), () => {
    console.console.log('App build!');
});

// Tarea para generar el swagger
gulp.task('swaggerFile', () => {
	return gulp.src(config.swagger.src).pipe(gulp.dest(config.swagger.dest));
});

gulp.task('compile-desa', () => {
	const tsResult = tsProject.src().pipe(tsProject());
	return tsResult.js.pipe(gulp.dest(config.server.dest));
 });

 gulp.task('build-desa', gulp.series('compile-desa', 'clean:temporal'), () => {
	console.console.log('App build!');
 });

gulp.task('default', gulp.series(config.clean.name, gulp.parallel('build', 'swaggerFile')));
gulp.task('prod', gulp.series(config.clean.name, gulp.parallel('build', 'swaggerFile')));
gulp.task('start-dev', gulp.series(config.clean.name, gulp.parallel('build-desa', 'swaggerFile'), 'start'));
