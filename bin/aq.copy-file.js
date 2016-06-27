const lib = require('..');

lib.copyFileAsync(process.argv[2], process.argv[3], function (err) {
    if (err) {
        console.error(err.stack || err);
        process.exit(1);
    }
    else {
        process.exit(0);
    }
});
