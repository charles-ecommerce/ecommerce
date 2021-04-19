import React from 'react';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';

const App = () => {
	return (
		<React.Fragment>
			<Header />
			<main className="py-3">
				<Container>
					<Route path="/login" component={LoginScreen} />
					<Route path="/register" component={RegisterScreen} />
					<Route path="/product/:id" component={ProductScreen} />
					<Route path="/" component={HomeScreen} exact />
				</Container>
			</main>
			<Footer />
		</React.Fragment>
	);
};

export default App;
