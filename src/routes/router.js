/*
* @Author: eleven
* @Date:   2017-10-24 20:34:06
* @Last Modified by:   eleven
* @Last Modified time: 2017-10-24 22:07:34
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pathToRegexp from 'path-to-regexp';
import invariant from 'invariant'

class Router extends Component {
	static displayName = 'Router';
	static propTypes = {
		path: PropTypes.string,
		exact: PropTypes.bool,
		component: PropTypes.func,
		render: PropTypes.func
	}
	componentWillMount() {
		console.log('sd')
		window.addEventListener('popstate', this.stateHandle)
	}
	componentWillUnmount() {
		window.removeEventListener('popstate', this.stateHandle)
	}

	stateHandle(event) {
		console.log(event)
	}

	render() {

		const { path, exact, component, render } = this.props;

		
		if( component ) {
			return React.createElement(component, { ...this.props })
		}
		if( render ) {
			return render({ ...this.props })
		}

	}
}

export default Router
