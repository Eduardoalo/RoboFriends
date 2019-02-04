import React from 'react';



class ErrorBoundry extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			hasError : false
		}
	}


	componentDidCatch(error, info){
		this.setState({hasError : true})


	}
	render(){
		if(this.state.hasError){

			return <div>
			<h1>Ooops. That is not good</h1>
			<h2>Ooopa. Temos um problema</h2>
			</div>
		}
		return this.props.children;
	}
}


export default ErrorBoundry;