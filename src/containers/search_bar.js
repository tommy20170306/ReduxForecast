import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// {} import function
import {fetchWeather} from '../actions';

class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = {
			term: "Hong Kong"
		};

		this.onInputChange = this.onInputChange.bind(this);

		this.onSearchResult = this.onSearchResult.bind(this);
	}

	onInputChange(event){

		this.setState({
			term: event.target.value
		});		

	}

	onSearchResult(event){
		event.preventDefault();

		//Fetch weather data from http://openweathermap.org/forecast5
		
		//Wrong: console.log(this.props.term);
		console.log(this.state.term);
		this.props.fetchWeather(this.state.term);
		this.setState({
			term: ''
		});
	}

	render(){
		return (
			<form 
				onSubmit={this.onSearchResult} 
				className="input-group">
				<input 
					className="form-control"
					placeholder="City for 5-day forecast"
					value={this.state.term}
					onChange={this.onInputChange}

				/>

				<span className="input-group-btn">
					<button 
						type="submit" 
						className="btn btn-secondary"
						>Submit</button>
				</span>
			</form>	
		)
	}
}

/*function mapStateToProps(state){
	return {
		term: state.term
	};
}*/

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchWeather}, dispatch);
}

/*export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);*/

export default connect(null, mapDispatchToProps)(SearchBar);