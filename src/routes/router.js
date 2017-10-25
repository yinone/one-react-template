/*
* @Author: eleven
* @Date:   2017-10-24 20:34:06
* @Last Modified by:   eleven
* @Last Modified time: 2017-10-24 22:07:34
*/

import React, { Component } from 'react';
import PropTypes from 'propTypes';
import pathToRegexp from 'path-to-regexp';
import invariant from 'invariant'

class Router extends Component {
	static displayName = 'Router';
	static propTypes = {
		path: PropTypes.string,
		exact: PropTypes.bool,
		component: PropTypes.object,
		render: PropTypes.func
	}
	componentWillMount() {
		window.addEventListener('popstate', stateHandle)
	}
	componentWillUnmount() {
		window.removeEventListener('popstate',stateHandle)
	}

	stateHandle(event) {
		console.log(event)
	}

	render() {
		return {

		}
	}
}

export default Router
