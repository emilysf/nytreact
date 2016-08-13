// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

// New York Times API
var keyAPI = "c0cadd8423d34c049b22a559dcce9f56";

// Helper Functions (in this case the only one is runQuery)
var helpers = {

	// This function serves our purpose of running the query of articles. 
	runQuery: function(topic, startYear, endYear){

		console.log(topic, startYear, endYear);

		
		var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+ keyAPI + "&q=" + topic + "&begin_date" + startYear + "&end_date" + endYear;

		return axios.get(queryURL)
			.then(function(response){

				console.log(response);
				return response.data.response.docs;
		})

	},

	// This function hits our own server to retrieve the record of query results
	getArticles: function(){

		return axios.get('/api')
			.then(function(response){

				console.log(response);
				return response;
			});
	},

	// This function posts new searches to our database.
	postArticles: function(articles){

		return axios.post('/api/saved', {
			title: this.main.headline,
			date: this.pub_date, 
			url: this.web_url
		})

		// return axios.post('/api', articles)
		// 	.then(function(results){

		// 		console.log("Posted to MongoDB");
		// 		return(results);
		// 	})
	},

	// This function deletes the articles from the database.
	deleteArticles: function(articles){

		return axios.post('/api/saved', {title: this.title})
			.then(function(results){

				return(results);
			})
	}

}


// We export the helpers function 
module.exports = helpers;