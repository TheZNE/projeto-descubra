module.exports = function(grunt){
    grunt.config('jshint', {
        all: ['Gruntfile.js', 'tasks/*.js', 'assets/js/*.js']
    });
};
