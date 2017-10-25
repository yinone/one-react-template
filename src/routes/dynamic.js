/*
* @Author: eleven
* @Date:   2017-10-21 23:21:38
* @Last Modified by:   eleven
* @Last Modified time: 2017-10-24 20:40:22
*/

// code from git@github.com:didierfranc/react-code-splitting.git

import React from 'react'
import PropTypes from 'prop-types'

export default class Async extends React.Component {
  static propTypes = {
    load: PropTypes.instanceOf(Promise).isRequired
  } 
  componentWillMount = () => {
    this.cancelUpdate = false
    this.props.load.then((c) => { 
      this.C = c
      if (!this.cancelUpdate) {
        this.forceUpdate()
      }
    })
  }

  componentWillUnmount = () => {
    this.cancelUpdate = true
  }

  render = () => {
    const { componentProps } = this.props
    return this.C
      ? this.C.default
        ? <this.C.default {...componentProps} />
        : <this.C {...componentProps} />
      : null
  }
}
