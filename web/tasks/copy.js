/** Copiar recursos necessários para o projeto (geralmente: fontes, imagens, páginas) */

module.exports = function(grunt){
    grunt.config('copy', {
        all: {
            files: [
                {
                    expand: true,
                    cwd: 'assets/vendor/font-awesome/fonts/',
                    src: '**',
                    dest: 'site/fonts/',
                    filter: 'isFile'
                },
                {
                    expand: true,
                    cwd: 'assets/vendor/font-abel/font/',
                    src: '**',
                    dest: 'site/font/',
                    filter: 'isFile'
                },
                {
                    expand: true,
                    cwd: 'assets/vendor/Materialize/dist/font/material-design-icons/',
                    src: '**',
                    dest: 'site/font/material-design-icons/',
                    filter: 'isFile'
                },
                {
                    expand: true,
                    cwd: 'assets/vendor/Materialize/dist/font/roboto/',
                    src: '**',
                    dest: 'site/font/roboto/',
                    filter: 'isFile'
                },
                {
                    expand: true,
                    src: '*.html',
                    dest: 'site/',
                    filter: 'isFile'
                },
                {
                    expand: true,
                    cwd: 'assets/images/',
                    src: '**',
                    dest: 'site/images/'
                },
            ]
        }
    });
};
