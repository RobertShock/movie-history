"use strict";

const tmdb = require('./tmdb');

const pressEnter = () => {
	$(document).keypress((e) => {
		if (e.key === 'Enter'){
			console.log("e", e);
			let searchText = $('#searchBar').val();
			let query = searchText.replace(/\s/g, "%20");
			tmdb.searchMovies(query);
		}
	});
};

module.exports = {pressEnter};