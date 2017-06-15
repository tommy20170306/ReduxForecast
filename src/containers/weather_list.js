import React, {Component} from 'react';
import {connect} from 'react-redux';
import WeatherChart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{
	constructor(props){
		super(props);
		this.renderWeather = this.renderWeather.bind(this);
	}

	renderWeather(cityData){
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const humids = cityData.list.map(weather => weather.main.humidity);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const lon = cityData.city.coord.lon;
		const lat = cityData.city.coord.lat;

		return(
			<tr key={name}>
				<td><GoogleMap lat={lat} lon={lon} /></td>
				<td><WeatherChart data={temps} color="red" unit="°C" /></td>
				<td><WeatherChart data={pressures} color="blue" unit="Pa" /></td>
				<td><WeatherChart data={humids} color="purple" unit="%" /></td>
			</tr>
		);
	}

	render(){
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}

function mapStateToProps(state){
	console.log(state.weather);
	return {
		weather: state.weather
	};
}

export default connect(mapStateToProps)(WeatherList);