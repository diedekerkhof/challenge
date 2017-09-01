module.exports = function(grunt) {

grunt.initConfig({

    // imports the config data from the package.json
    pkg: grunt.file.readJSON('package.json'),


    sass: {
        dist: {
            files: {
                'css/style.css'  :  'sass/style.scss'
            }
        }
    },
    cssmin: {
        my_target: {
            files: [{
                expand: true,
                cwd: 'css',
                src: ['.css', '!.min.css'],
                dest: 'css/',
                ext: '.min.css',
            }]
        }
    },
    watch: {
        sass: {
            files: ['sass/*/.scss'],
            tasks: ['sass', 'cssmin']
        }
    }

});




grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['sass', 'cssmin', 'watch']);

};
