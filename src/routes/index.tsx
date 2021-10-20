import React, { ReactElement, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Example from './Example'

const routes = [ { ...Example }, { ...Home }]

const Loader = () => <>Loading</>

const Routes = (): ReactElement => (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Switch>
      {routes.map(({ Component, ...props }, key) => (
        <Route {...props} key={key}>
          <Component />
        </Route>
      ))}
      </Switch>
    </Suspense>
  </BrowserRouter>
)

export default Routes
