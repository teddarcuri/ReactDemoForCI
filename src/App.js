 import React from 'react';
 import ReactDOM from 'react-dom';

 import Shouter from './Shouter';
 import Node from './Node';
 import $ from 'jquery';

 class App extends React.Component {

 	constructor(props) {
 		super(props); 

 		this.state = {
 			mainMessage: "YO FROM APP COMPONENT",
 			subText: "Dude, I totally love cheese",
 			recentContent: [],
 			siteUrl: "http://colorado-interactive:8888",
 			requestUrls: {
 				getRecentContent: "/recent-content"
 			}
 		}
 	}

 	componentDidMount() {
 		this.getRecentContent();
 	}

 	getRecentContent() {
 		$.ajax({
 			url: this.state.siteUrl + this.state.requestUrls.getRecentContent,
 			success: (data) => {
 				this.setState({recentContent: data})
 			}
 		});
 	}

 	updateMessage() {
 		var value = this.refs.message.value;
 		this.setState({mainMessage: value});
 	}

 	render() {
 		return (
 		<div>
 		 <Shouter message={this.state.mainMessage} 
 		 		  twinkletoes={this.state.subText}
 		 		  theme="DARK" />
 		 <input ref="message" value={this.state.mainMessage} type="text" onChange={this.updateMessage.bind(this)}/>
 		 <Node nodes={this.state.recentContent}/>
 		</div>
 		)
 	}

 }

 ReactDOM.render(
 	<App />,
 	document.getElementById("app")
 )