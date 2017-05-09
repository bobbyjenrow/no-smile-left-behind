import React from "react"
import { Route } from "react-router"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import AppContainer from "./AppContainer"
import Page from "./layouts/Page"
import PageError from "./layouts/PageError"
// import Homepage from "./layouts/Homepage"
import Post from "./layouts/Post"
import MyPage from './layouts/MyPage'
import ContactPage from './layouts/ContactPage'
import Construction from './layouts/Construction'

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Page,
      PageError,
      Post,
      MyPage,
      ContactPage,
      Construction
    }}
  />
)

export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
)
