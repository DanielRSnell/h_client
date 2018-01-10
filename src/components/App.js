
// Required
/* eslint guard-for-in: 0 */
/* eslint no-console: 0 */
// or just take everything!

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Layout, Row } from 'antd';
import '../style/app.css';

// Navigation 
import MainNav from './nav/MainNav';
import SubNav from './nav/SubNav';

// Other Pre-Render Options
import Home from './pages/Home';
import Cryptocurrency from './pages/Cryptocurrency';
// Testing Grounds - Where we build things 
const { Footer } = Layout;
// View State Starts Here

class App extends Component {

// Antd Design Specification Grid 
	
	render() {

		
		return (
		<Layout>
				<BrowserRouter>
					
					<Row>					
					<MainNav />
					<SubNav />
							<Route exact={true} path="/" component={Home} />
							<Route exact={true} path="/cryptocurrency/:id" component={Cryptocurrency} />

							<Footer style={{ textAlign: 'center' }}>
							<strong>Hackcoin</strong> ©2017 <strong>Kickass Data</strong> and <strong>Unicorns</strong>.
						  </Footer>
						</Row>
					
				</BrowserRouter>
      </Layout>
    
		);
	}
}
// eslint-disable-next-line
export default App;