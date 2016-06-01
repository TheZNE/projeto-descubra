module.exports = function(grunt){
    grunt.config('uglify', {
        all: {
            files: {
                'site/js/jquery.js' : 'assets/vendor/jquery/dist/jquery.js',
                'site/js/materialize.js' : 'assets/vendor/Materialize/dist/js/materialize.js',
                'site/js/angular.js' : 'assets/vendor/angular/angular.js',
                'site/js/controller/PostController.js' : 'assets/js/controller/PostController.js'
            }
        }
    });
};
