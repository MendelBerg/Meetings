import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

// algo
// 1. show login btn by default +
// 2. show spinner for 2 sec after login click
// 3. show logout
// 4. show login after logout click

class Auth extends Component {
	state = {
		isLoggedIn: false,
		isLogging: false,
	};

	onLogin = () => {
		this.setState({
			isLogging: true,
		});

		setTimeout(() => {
			this.setState({
				isLoggedIn: true,
				isLogging: false,
			});
		}, 2000);
	};

	onLogout = () => {
		this.setState({
			isLoggedIn: false,
		});
	};

	render() {
		const { isLogging, isLoggedIn } = this.state;
		if (isLogging) {
			return <Spinner size={50} />;
		}
		if (isLoggedIn) {
			return <Logout onLogout={this.onLogout} />;
		}
		return <Login onLogin={this.onLogin} />;
	}
}

export default Auth;
