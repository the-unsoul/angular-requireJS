/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: ['lib/<%= pkg.name %>.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                }
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
        },
        less: {
            development: {
                options: {
                    paths: ["source/less"]
                },
                files: {
                    "source/css/animate.css": "source/less/animate.less",
                    "source/css/main.css": "source/less/main.less",
                }
            },
            bootstrap: {
                files: {
                    "source/css/bootstrap.css": "source/less/bootstrap/bootstrap.less",
                }
            }
        },
        watch: {
            less: {
                files: ['source/less/main.less', 'source/less/animate.less', 'source/less/_functions.less'],
                tasks: ['less:development']
            },
            bootstrap: {
                files: 'source/less/setting.less',
                tasks: ['less:bootstrap']
            }
        },
        copy: {
            css: {
                cwd: 'source/css/',
                src: '*.css',
                expand: true,
                dest: 'public/css/',
                flatten: true,
                filter: 'isFile'
            },
            img: {
                cwd: 'source/img/',
                src: '**',
                expand: true,
                dest: 'public/img/',
                flatten: true,
                filter: 'isFile'
            },
            views: {
                cwd: 'source/views/',
                src: '**',
                expand: true,
                dest: 'public/views/',
                flatten: true,
                filter: 'isFile'
            },
            html: {
                cwd: 'source/',
                src: '*.html',
                expand: true,
                dest: 'public/',
                flatten: true,
                filter: 'isFile'
            }
        },
        uglify: {
            my_target: {
                files: {
                    // 'public/css/main.css': ['public/css/bootstrap.css', 'public/css/normalize.min.css', 'public/css/animate.css', 'public/css/main.css' ]
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'public/css/main.css': ['public/css/main.css'],
                    'public/css/bootstrap.css': ['public/css/bootstrap.css'],
                    'public/css/normalize.min.css': ['public/css/normalize.min.css'],
                    'public/css/animate.css': ['public/css/animate.css']
                }
            }
        },
        karma: {
            unit: {
                configFile: 'test/config/karma.conf.js'
            }
        },
        protractor: {
            options: {
                configFile: 'e2e-conf.js',
                keepAlive: false,
                noColor: true,
                args: {
                    // args passed to the command
                }
            },
            run: {

            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: "source/js",
                    mainConfigFile: "source/js/main.js",
                    optimize: "uglify2",
                    dir: 'public/js/',
                    modules: [{
                        name: 'main'
                    }]
                }
            }
        },
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-protractor-runner');


    // Default task.
    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ['less', 'optimize', 'copy', 'cssmin']);

    // build bootstrap
    grunt.registerTask('bootstrap', ['less:bootstrap']);    
    // build css
    grunt.registerTask('css', ['less:development']);    

    // Unit testing - Karma - Jasmine
    grunt.registerTask('unit', ['karma:unit']);

    // e2e testing - Protractor
    grunt.registerTask('e2e', ['protractor']);

    // both tests(?)
    grunt.registerTask('test', ['unit', 'e2e']);


    // r.js optimize
    grunt.registerTask('optimize', ['requirejs']);
    // uglify

};
