import React, { Component } from "react"
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// import enhanceCollection from "phenomic/lib/enhance-collection"

// import Helmet from "react-helmet"
// import warning from "warning"

import CallToAction from '../../components/CallToAction/index.js'
// import Loading from "../../components/Loading"

class MyPage extends Component{
  constructor(props){
    super(props);
    this.head = this.props.head;
  }
  render(){
    return (
      <ReactCSSTransitionGroup
        transitionName="bg"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={300}
        transitionAppear={true}
        transitionAppearTimeout={500}
      >
      {
        <CallToAction cta={this.head.cta} hero={this.head.hero}/>
      }
      </ReactCSSTransitionGroup>
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
  cta: PropTypes.object,
}

MyPage.contextTypes = {
  metadata: PropTypes.object.isRequired,
  collection: PropTypes.array.isRequired,
}

export default MyPage
