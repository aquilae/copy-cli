const fs = require('fs-extra');

exports.copyFileAsync = function (source, destination, callback) {
    if (typeof (callback) !== 'function') {
        throw new Error('`callback` should be a function');
    }

    setImmediate(function copyFileAsync() {
        if (typeof (source) !== 'string') {
            return callback(new Error('`source` should be a string'));
        }
        if (typeof (destination) !== 'string') {
            return callback(new Error('`destination` should be a string'));
        }

        fs.copy(source, destination, callback);
    });
};
