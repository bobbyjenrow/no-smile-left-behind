import React from "react"
import PropTypes from 'prop-types'

import "./index.global.css"
import "./highlight.global.css"

// import {I18nextProvider} from "react-i18next"
// import getI18n from  "./i18n/get.js"
// import getLang from  "./i18n/getLang.js"
// import i18next from 'i18next'
//
// import  i18n from "./i18n"

import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
import Header from "./components/Header"
import Content from "./components/Content"


class AppContainer extends React.Component{
  constructor(props){
    super(props);
    // const i18n = getI18n(this.context);
  }
  render(){
    const {children} = this.props;
    // const locale = getLang(this.context)
    // const init = {
    //   lng: locale,
    //   fallbackLng: 'en',
    //   debug: true,
    //   resources: {
    //     en: i18n.en,
    //     es: i18n.es
    //   }
    // }
    return(
    // <I18nextProvider
    //   i18n={
    //     i18next.init(init)
    //   }
    // >
      <Container>
        <DefaultHeadMeta />
        <Header />
        <Content>
          { children }
        </Content>
      </Container>
    ///</I18nextProvider>
  )}
}
AppContainer.propTypes = {
  children: PropTypes.node,
}
AppContainer.contextTypes = {
  location: PropTypes.object.isRequired,
  metadata: PropTypes.object.isRequired,
}

export default AppContainer
