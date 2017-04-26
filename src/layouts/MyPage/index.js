import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
import warning from "warning"

import CallToAction from '../../components/CallToAction/index.js'
// import Loading from "../../components/Loading"

import styles from "./index.css"

class MyPage extends Component(
  render(){
    return (
        <CallToAction cta={head.cta} hero={head.hero}/>
    )}
}

MyPage.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
  cta: PropTypes.object
}

MyPage.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default MyPage
