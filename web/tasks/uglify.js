module.exports = function(grunt){
    grunt.config('uglify', {
        all: {
            files: {
                'assets/js/jquery.js' : 'assets/js/vendor/jquery/dist/jquery.js'
            }
        }
    });
};
