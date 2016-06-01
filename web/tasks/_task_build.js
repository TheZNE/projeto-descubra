module.exports = function(grunt){
    grunt.registerTask('build', [
            'copy',
            'sass',
            'uglify'
    ]);
};
