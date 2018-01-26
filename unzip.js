/*eslint-env node, es6*/
/*eslint no-unused-vars: 1*/

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
    course.fataError(e);
    stepCallback(e, course);
  }
};