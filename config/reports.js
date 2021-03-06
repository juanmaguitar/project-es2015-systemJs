/*jshint node:true */
/*global module: true */

// Server configuration
module.exports = function (grunt, options) {
    'use strict';

    return {
        'tasks': {
            'clean': {
                'reports': {
                    'src': [options.targetFolderPath + '/yuidoc', options.targetFolderPath + '/report-jshint-eslint.xml']
                }
            },

            // JsDoc or similare, lia YuiDoc, Docxygen ...
            'yuidoc': {
                'reports': {
                    'name': 'ES6 application demo documentation>',
                    'description': 'An example of doc generation for ES6/7 apps',
                    'version': '1.0.0',
                    'options': {
                        'paths': options.srcFolderPath + '/app',
                        'outdir': options.targetFolderPath + '/yuidoc'
                    }
                }
            },

            // EsLint part
            'eslint': {
                'options': {
                    'force': true,
                    'format': 'checkstyle',
                    'outputFile': options.targetFolderPath + '/report-eslint-checkstyle.xml',
                    'useEslintrc': true
                },
                'reports': {
                    'src': [options.srcFolderPath + '/**/*.js', '!' + options.srcFolderPath + '/bower_components/**/*']
                }
            }
        }
    };
};

