const
	gulp = require("gulp"),
	minifyHTML = require("gulp-htmlmin"),
	sass = require("gulp-sass"),
	minifyJS = require("gulp-minify");

gulp.task("minifyHTML", function() {
	return gulp.src("views/*.html")
		.pipe(minifyHTML({
			removeComments: true,
			collapseWhitespace: true,
			collapseBooleanAttributes: true,
			removeAttributeQuotes: true,
			removeEmptyAttributes: true,
			minifyJS: true
		}))
		.pipe(gulp.dest("./public/"))
});

gulp.task("sass", function () {
	gulp.src("./sass/*.scss")
		.pipe(sass({
			outputStyle: "compressed"
		}))
		.pipe(gulp.dest("./public/css"))
});

gulp.task("minifyJS", function () {
	gulp.src("./scripts/*.js")
		.pipe(minifyJS({
			ext: {
				min: ".js",
			},
			noSource: true
		}))
		.pipe(gulp.dest("public/js"))
});

gulp.task("default", ["minifyHTML", "sass", "minifyJS"]);
