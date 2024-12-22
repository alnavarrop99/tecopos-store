import { Route, Switch } from 'wouter'

import App from './core/app'
import Products from './core/products'
import $404 from './core/404'

export default () => (
  <Switch>
    <Route path='/'>
      <App> <Route component={Products} /> </App>
    </Route>
    <Route path="*" component={$404} />
  </Switch>
)
