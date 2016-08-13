// Include React 
var React = require('react');

// This is the results component
var Results = React.createClass({
	// Here we render the function
	render: function(){
		var NYTdata = this.props.results || [];

		return(

			<div className="col-md-12">
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title text-center">Results</h3>
					</div>
		
					<div className="panel-body" onClick={this.clickHandler}>
						
						{NYTdata.map(function(article, i) {

							// return <p key={i}><a href={article.url}>{article.Title}</a> <span>{article.pub_date}</span><a href="" className="btn btn-primary">Save</a></p>

						})}

					</div>
				</div>
			</div>

		) 

	} 

}); 

// Export the component back for use in other files
module.exports = Results;