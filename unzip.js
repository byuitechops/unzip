
const decompress = require('decompress');

module.exports = (course, stepCallback) => {
    try {
    /* Unzip the course into a new folder */
        decompress(course.info.originalZipPath, course.info.unzippedPath)
            .then((files) => {
                course.message('Course successfully unzipped');
                stepCallback(null, course);
            }, (promiseError) => {
                course.fatalError(promiseError);
                stepCallback(promiseError, course);
            });

    } catch (e) {
        course.fatalError(e);
        stepCallback(e, course);
    }
};