import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as m from 'moment';
import { Layout } from 'antd';
import Highcharts from 'highcharts/highstock';

// Load Highmaps as a module
require('highcharts/modules/map')(Highcharts);

const ChartData = [];

class CandleChart extends Component {

	
	PrepareData() {
		
		if ( this.props.data.coins.loading !== true ) {

		const Values = Object.values(this.props.data.coins.coins_rank);

		const Store = [];

		Values.forEach( item => { 

			if ( item !== null ) {

				Store.push(item.charts)

			} else { 
				console.log(`Item is null`);
			}


		});

			const HistValues = Object.values(Store);
			const hist_store = [];
			
			HistValues.forEach( item => {

			if ( item !== null || undefined ) {
				
				hist_store.push(item.month);

				}

			});

			this.loadChart(hist_store);

		}

	}

	//Props Passed 

	loadChart(itemHist) {
		const btc_history = Object.values(itemHist);
		
		const ohlcData = [];
	
		const volumeData = [];
		
	// Splitting the data set	

	
		btc_history.forEach(item => {
		
		const Values = Object.values(item);
		
		Values.forEach( item => { 

		// Organize OHLC Data
			
			ohlcData.push([ 
				m.unix(item.time).valueOf(),
				item.open,
				item.high,
				item.low,
				item.close
		]);
			volumeData.push([
				
				m.unix(item.time).valueOf(), // date
				
				item.volumeto // Volume
			]);

		});

	});
	

		Highcharts.stockChart("loading", {

			rangeSelector: {
				selected: 0
			}, 
			
			credits: {
				enabled: false
			  },

			yAxis: [
				{
					labels: {
						align: 'right',
						x: -3
					},
					title: {
						text: 'OHLC'
					},
					height: '100%',
					lineWidth: 4,
					resize: {
						enabled: true
					}
				},
				{
					labels: {
						align: 'right',
						x: -3
					},
					title: {
						text: 'Volume'
					},
					top: '100%',
					height: '35%',
					offset: 0,
					lineWidth: 2
				}
			],

			tooltip: {
				split: true
			},

			series: [
				{
					type: 'candlestick',
					name: 'chart',
					data: ohlcData
				},
				{
					type: 'column',
					name: 'Volume',
					data: volumeData,
					yAxis: 1
				}
			]
		});
	}
	
// Render the data unless data is still pending -- as needed

	render() {
		
		if ( this.props.data.loading ) {
			console.log(`Loading Data`);
		} else {
			console.log(`Data has loaded`);
			this.PrepareData();
		}

	// Pending is not required for Candle / Loading 	

	// Post the data 		
			
		return (
			
			<div>
				<div id="loading" />
			
			
			
				<div id="candle" />
			</div>	
			
		);
	}
}

export default CandleChart;
