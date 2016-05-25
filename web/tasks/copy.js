module.exports = function(grunt){
    grunt.config('copy', {
        all: {
            files: [
                {
                    expand: true,
                    cwd: 'assets/js/vendor/font-awesome/fonts/',
                    src: '**',
                    dest: 'assets/fonts/',
                    filter: 'isFile'
                },
                {
                    expand: true,
                    cwd: 'assets/js/vendor/hack/fonts/hack/',
                    src: '**',
                    dest: 'assets/fonts/hack/',
                    filter: 'isFile'
                }
            ]
        }
    });
};
