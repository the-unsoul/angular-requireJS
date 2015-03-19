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
    coffee:{
      compileBare:{
        options:{
          bare: true
        },
        files:{
          'html/js/app.js': 'html/coffee/app.coffee',
          'html/js/main.js': 'html/coffee/main.coffee'
          // 'html/js/login.js': 'html/coffee/login.coffee'
        }
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/<%= pkg.name %>.min.js'
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
    qunit: {
      files: ['test/**/*.html']
    },
    watch: {
      coffee:{
        files: 'html/coffee/*.coffee',
        tasks: ['coffee:compileBare']
      }
    },
    copy: {
      main: {
        files: [
          // includes files within path
          {expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},

          // includes files within path and its sub-directories
          {expand: true, src: ['path/**'], dest: 'dest/'},

          // makes all src relative to cwd
          {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

          // flattens results to a single level
          {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
        ],
      },
    },
    karma:{
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
          uglify2: {
              mangle: false
          },
          baseUrl: "html/",
          mainConfigFile: 'html/js/main.js',
          // out: 'html/js/optimized.js',
          optimize: 'uglify2',
          modules: [
            {
              name: 'app',
              include: [
                'testCtrl'
              ]
            },{
              name: 'loginCtrl'
            }
          ]
        }
      }
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-runner');


  // Default task.
  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'coffee']);

  // watch js
  grunt.registerTask('watchjs', ['watch:coffee']);

  // watch css
  grunt.registerTask('watchcss', []);

  // Unit testing - Karma - Jasmine
  grunt.registerTask('unit', ['karma:unit']);

  // e2e testing - Protractor
  grunt.registerTask('e2e', ['protractor']);
  
  // both tests(?)
  grunt.registerTask('test', ['unit', 'e2e']);

  // r.js optimize
  grunt.registerTask('optimize', ['requirejs']);

};

