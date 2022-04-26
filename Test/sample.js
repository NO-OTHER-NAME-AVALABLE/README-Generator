const sampleAnswers = require('./sample-answers');
const {generateMarkdown, writeToFile} = require('../utils/generateMarkdown');

writeToFile('./Test/TestReadMe.md', generateMarkdown(sampleAnswers));