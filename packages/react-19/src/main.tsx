import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Route, Switch } from 'wouter'

import App from './core/app'
import Products from './core/products'
import $404 from './core/404'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Switch>
      <Route path='/'>
        <App> <Route component={Products} /> </App>
      </Route>
      <Route path="*" component={$404} />
    </Switch>
  </StrictMode>,
)
