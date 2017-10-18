"use strict";

const tmdb = require('./tmdb');

const apiKeys = () => {
	return new Promise ((resolve, reject) => {
		$.ajax('./db/apiKeys.json').done((data) => {
			console.log(data);
			resolve(data.apiKeys);
		}).fail((error) => {
			reject(error);
		});
	});
};

const retrieveKeys = () => {
	console.log('retrieveKeys');
	apiKeys().then((results) => {
		tmdb.setKey(results.tmdb.apiKey);
	}).catch((error) => {
		console.log("error in retrieve keys", error);
	});
};

module.exports = {retrieveKeys};