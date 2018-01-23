/*eslint-env node, es6*/
/*eslint no-unused-vars: 1*/

const decompress = require('decompress');

module.exports = (course, stepCallback) => {
  try {
    /* Unzip the course into a new folder */
    decompress(course.info.originalFilepath, course.info.unzippedFilepath)
    .then((files) => {
      course.message('unzip', 'Course successfully unzipped');
      stepCallback(null, course);
    }, (promiseError) => {
      course.FatalError(promiseError);
      stepCallback(promiseError, course);
  });

  } catch (e) {
    course.FatalError(e);
    stepCallback(e, course);
  }
};
