// Include React 
var React = require('react');

// This is the results component
var Results = React.createClass({

	// Here we render the function
	render: function(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Article</h3>
				</div>
				<div className="panel-body text-center">

						<h1>Article:</h1>
						<p>{this.props.response.docs[0].web_url}</p>

				</div>
			</div>

		)
	}
});

// Export the component back for use in other files
module.exports = Results;