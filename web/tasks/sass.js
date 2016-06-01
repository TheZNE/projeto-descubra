module.exports = function(grunt){
    grunt.config('sass', {
        all: {
            options: {
                style: 'compact'
            },
            files: {
                'site/css/style.css': 'assets/sass/style.scss'
            }
        }
    });
};
