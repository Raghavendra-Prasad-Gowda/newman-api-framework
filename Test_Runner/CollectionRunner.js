const newman = require('newman'); // require newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('../Collections/Book-Store-Collection.postman_collection.json'),
    environment: require('../Environment/STG_ENV.postman_environment.json'),
    reporters: 'cli'
}, function (error) {
	if (error) { throw error; }
    console.log('Collection Run is Completed !!');
});