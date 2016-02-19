 import React from 'react';
 import ReactDOM from 'react-dom';

 class Nodes extends React.Component {

 	render() {
 		return (
 		 <div>
 		 	{
 		 		this.props.nodes.map((node) => {
 		 			var setP = () => {return {__html: node.body[0].value}}
 		 			return (
 		 			<div>
 		 				<h1>{node.title[0].value}</h1>
 		 				<p dangerouslySetInnerHTML={setP()}></p>
 		 			</div>
 		 			)
 		 		})
 		 	}
 		 </div>
 		)
 	}

 }

export default Nodes;