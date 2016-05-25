module.exports = function(grunt){
    grunt.config('sass', {
        all: {
            options: {
                style: 'expanded'
            },
            files: {
                'assets/css/main.css': 'assets/sass/main.sass',
                'assets/css/materialize.css': 'assets/js/vendor/Materialize/sass/materialize.scss',
                'assets/css/hack.css': 'assets/js/vendor/hack/scss/hack.scss',
                'assets/css/font-awesome.css': 'assets/js/vendor/font-awesome/scss/font-awesome.scss'
            }
        }
    });
};
