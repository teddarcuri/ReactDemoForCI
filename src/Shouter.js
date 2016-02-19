 import React from 'react';
 import ReactDOM from 'react-dom';

 import themes from "./config/themes"

 class Shouter extends React.Component {


 	render() {

 		let theme;

 		if (this.props.theme === "DARK") {
 			theme = themes.dark	
 		} else {
 			theme = themes.light
 		}

 		return (
 		 <div style={theme}>
 			<h1>{this.props.message}</h1>
 			<h3>{this.props.twinkletoes}</h3>
 		 </div>
 		)
 	}

 }

export default Shouter;