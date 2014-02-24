// Taken from: 
// http://programanddesign.com/php/compile-all-jade-files-to-a-single-client-side-javascript-file/

if (process.argv.length > 3) {
    var Jade = require('jade');
    var FileSystem = require('fs');
    var Path = require('path');
    var _ = require('underscore');

    var outName = process.argv[2];
    var viewsDir = process.argv[3];

    files = FileSystem.readdirSync(viewsDir);
    var templates = {};
    files.forEach(function(filename) {
        if(/\.jade$/.test(filename)) {
            var name = Path.basename(filename, '.jade');
            var path = Path.join(viewsDir, filename);
            console.log('compiling', path);
            var fileContents = FileSystem.readFileSync(path, {encoding: 'utf8'});
            templates[name] = Jade.compile(fileContents, {
                debug: false,
                compileDebug: true,
                filename: path,
                client: true
            });
        }
    });
    console.log('writing', outName);

    var properties = [];
    _.each(templates, function(value, key) {
        properties.push(JSON.stringify(key) + ':\n  ' + value.toString());
    });
    var sourceCode = 'var Templates = {\n' + properties.join(',\n\n') + '\n};';

    FileSystem.writeFile(outName, sourceCode);
}
else {
    console.log('node compile_jade.js [path/to/outName.js] [path/to/viewsDir/]');
}