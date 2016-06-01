module.exports = function(grunt){
    grunt.config('sass', {
        all: {
            options: {
                style: 'expanded'
            },
            files: {
                'site/css/main.css': 'assets/sass/main.sass',
                'site/css/materialize.css': 'assets/vendor/Materialize/sass/materialize.scss',
                'site/css/abel.css': 'assets/vendor/font-abel/scss/abel.scss',
                'site/css/font-awesome.css': 'assets/vendor/font-awesome/scss/font-awesome.scss'
            }
        }
    });
};
