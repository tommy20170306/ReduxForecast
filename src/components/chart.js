import React from 'react';
import _ from 'lodash';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(data, unit){

	switch(unit){
		case '°C':
			return (_.sum(data)/data.length - 272.15).toFixed(1) + unit;
		case 'Pa':
		case '%':
			return _.round(_.sum(data)/data.length) + unit;
	}

	return _.round(_.sum(data)/data.length);
	//or
	return (data.reduce((a,b) => a+b, 0) / data.length).toFixed(2);
}

export default (props) => {
	return (
		<div>
			<Sparklines svgHeight={120} svgWidth={180} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="mean" />
			</Sparklines>
			<div>Average: {average(props.data, props.unit)}</div>
		</div>
	);
}