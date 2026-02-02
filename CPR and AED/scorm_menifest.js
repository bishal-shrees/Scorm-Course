/* Copy all the code below and replace the content of your scorm_manifest.js file with it */


/*
 * grunt-scorm-manifest
 * https://github.com/raygesualdo/grunt-scorm-manifest
 * Copyright (c) 2013 Ray Gesualdo
 * Licensed under the MIT license.
 * Fully backward compatible with SCORM 1.2, 2004v3, 2004v4
 * Supports optional 4th Edition features (masteryScore, sequencing, objectives)
 */

'use strict';

module.exports = function(grunt) {

    grunt.registerMultiTask('scorm_manifest', 'Generate a SCORM IMS manifest file.', function() {

        var options = this.options({
            version: '2004',          // "1.2", "2004v3", "2004v4"
            courseId: 'CourseID',
            SCOtitle: 'SCO Title',
            moduleTitle: 'Module',
            launchPage: 'index.html',
            path: './',
            masteryScore: null,       // optional numeric value for v4
            objectives: []            // optional array of objectives for v4
        });

        // XML Tokens
        var xmlTokens = {
            versionString: '2004 4th Edition',
            scormType: 'adlcp:scormType',
            fileArr: [
                {'@identifier': 'resource_1'},
                {'@type': 'webcontent'},
                {'@href': options.launchPage}
            ]
        };

        // Version-specific tokens
        switch(options.version.toLowerCase()) {
            case "1.2":
                xmlTokens.versionString = '1.2';
                xmlTokens.scormType = 'adlcp:scormtype';
                break;
            case "2004v3":
                xmlTokens.versionString = '2004 3rd Edition';
                xmlTokens.scormType = 'adlcp:scormType';
                break;
            case "2004":
            case "2004v4":
                xmlTokens.versionString = '2004 4th Edition';
                xmlTokens.scormType = 'adlcp:scormType';
                break;
        }

        // Add SCO type dynamically
        var tObj = {};
        tObj['@' + xmlTokens.scormType] = 'sco';
        xmlTokens.fileArr.push(tObj);

        // Add course files
        this.files.forEach(function(f) {
            if (!f.orig.expand) {
                grunt.log.warn('Multiple files not specified.');
                return false;
            }
            if (f.src.indexOf('imsmanifest.xml') > -1) return false;

            f.src.filter(function(filepath) {
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    xmlTokens.fileArr.push({ file: { '@href': filepath } });
                    return true;
                }
            });
        });

        // Build XML manifest structure
        var xmlObj = {
            manifest: {
                '@identifier': options.courseId,
                '@version': '1',
                metadata: {
                    schema: 'ADL SCORM',
                    schemaversion: xmlTokens.versionString
                },
                organizations: {
                    '@default': options.courseId + '-org',
                    organization: {
                        '@identifier': options.courseId + '-org',
                        title: options.SCOtitle,
                        item: {
                            '@identifier': 'item_1',
                            '@identifierref': 'resource_1',
                            title: options.moduleTitle,
                            // 4th Edition sequencing (only for 2004v4 or 2004)
                            ...(options.version.toLowerCase() === '2004v4' || options.version.toLowerCase() === '2004' ? {
                                'imsss:sequencing': {
                                    'imsss:objectives': options.objectives.map(function(obj, idx) {
                                        return {
                                            'imsss:objective': {
                                                '@objectiveID': obj.id || 'obj_' + idx,
                                                '@satisfiedByMeasure': obj.satisfiedByMeasure || 'true'
                                            }
                                        };
                                    }),
                                    'imsss:rollupRules': {},
                                    'imsss:deliveryControls': {}
                                }
                            } : {})
                        }
                    }
                },
                resources: {
                    resource: [
                        // Resource 1
                        Object.assign(
                            {
                                '@identifier': 'resource_1',
                                '@type': 'webcontent',
                                '@href': options.launchPage
                            },
                            options.masteryScore ? { 'adlcp:masteryScore': options.masteryScore } : {},
                            {
                                // Include all other course files
                                files: xmlTokens.fileArr
                                    .filter(f => f.file)
                                    .map(f => ({ file: { '@href': f.file['@href'] } }))
                            }
                        )
                    ]
                }
            }
        };

        // Create XML builder
        var xmlbuilder = require('xmlbuilder');
        var xmlDoc = xmlbuilder.create(xmlObj, { version: '1.0', encoding: 'UTF-8', standalone: true });

        // Version-specific namespaces
        switch(options.version.toLowerCase()) {
            case "1.2":
                xmlDoc.att('xmlns', 'http://www.imsproject.org/xsd/imscp_rootv1p1p2')
                      .att('xmlns:adlcp', 'http://www.adlnet.org/xsd/adlcp_rootv1p2')
                      .att('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance')
                      .att('xsi:schemaLocation',
                          'http://www.imsproject.org/xsd/imscp_rootv1p1p2 imscp_rootv1p1p2.xsd ' +
                          'http://www.imsglobal.org/xsd/imsmd_rootv1p2p1 imsmd_rootv1p2p1.xsd ' +
                          'http://www.adlnet.org/xsd/adlcp_rootv1p2 adlcp_rootv1p2.xsd');
                break;
            case "2004":
            case "2004v3":
            case "2004v4":
                xmlDoc.att('xmlns', 'http://www.imsglobal.org/xsd/imscp_v1p1')
                      .att('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance')
                      .att('xmlns:adlcp', 'http://www.adlnet.org/xsd/adlcp_v1p3')
                      .att('xmlns:adlseq', 'http://www.adlnet.org/xsd/adlseq_v1p3')
                      .att('xmlns:adlnav', 'http://www.adlnet.org/xsd/adlnav_v1p3')
                      .att('xmlns:imsss', 'http://www.imsglobal.org/xsd/imsss')
                      .att('xsi:schemaLocation',
                          'http://www.imsglobal.org/xsd/imscp_v1p1 imscp_v1p1.xsd ' +
                          'http://www.adlnet.org/xsd/adlcp_v1p3 adlcp_v1p3.xsd ' +
                          'http://www.adlnet.org/xsd/adlseq_v1p3 adlseq_v1p3.xsd ' +
                          'http://www.adlnet.org/xsd/adlnav_v1p3 adlnav_v1p3.xsd ' +
                          'http://www.imsglobal.org/xsd/imsss imsss_v1p0.xsd');
                break;
        }

        // Pretty-print XML
        var prettyXml = xmlDoc.end({ pretty: true });

        // Write to file
        options.path = unixifyPath(options.path);
        grunt.file.write(options.path + 'imsmanifest.xml', prettyXml);

        grunt.log.writeln('SCORM manifest created at: ' + options.path + 'imsmanifest.xml');

    });

    // Windows path helper
    function unixifyPath(filepath) {
        return process.platform === 'win32' ? filepath.replace(/\\/g, '/') : filepath;
    }

};
