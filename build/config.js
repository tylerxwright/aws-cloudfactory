var argv = require('yargs').argv;
var path = require('path');

module.exports = {
    owner: argv.owner ? argv.owner : 'General',
    application: argv.application ? argv.application : 'any',
    rootCidr: argv.rootCidr ? argv.rootCidr : '10.10',
    packageBucket: argv.packageBucket ? argv.packageBucket : 'gen-any-gbl-as3-bkt-cfn',
    distPath: path.join(__dirname, 'dist')
};