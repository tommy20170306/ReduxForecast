import axios from 'axios';

const API_KEY = 'dd546e7adbdd9b53005b9852f2156f3d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//?q=London,uk&appid=dd546e7adbdd9b53005b9852f2156f3d

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	var return_now = false;

	const url = `${ROOT_URL}&q=${city}`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}