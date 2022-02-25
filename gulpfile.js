const {src, dest, series, watch} = require('gulp')
const htmlMin = require('gulp-htmlmin')
const cssMin = require('gulp-css-minify')
const svgSprite = require('gulp-svg-sprite')
const image = require('gulp-image')
const del = require('del')
const browserSync = require('browser-sync').create()

const clear = () => {
    return del(['dist'])
}

const htmlMinify = () => {
    return src('*.html')
    .pipe(htmlMin({
        collapseWhitespace: true,
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const cssMinify = () => {
    return src('./css/**/*.css')
    .pipe(cssMin())
    .pipe(dest('dist/css'));
}

const images = () => {
    return src([
        'img/**/*.jpg',
        'img/**/*.jpeg',
        'img/**/*.png',
        'img/*.svg'
    ])
    .pipe(image())
    .pipe(dest('dist/img'))
}

const svgSprites = () => {
    return src('img/svg/**/*.svg')
    .pipe(svgSprite({
        mode: {
            stack: {
                sprite: '../sprite.svg'
            }
        }
    }))
    .pipe(dest('dist/img'))
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
}

watch('*.html', htmlMinify)
watch('css/**/*.css', cssMinify)
watch('img/**/*.svg', svgSprites)

exports.htmlMinify = htmlMinify
exports.default = series(clear, htmlMinify, cssMinify, images, svgSprites, watchFiles)