import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ItemPage from './components/ItemPage'

const Routes = () => (
    <Switch>
        <Route 
        exact
        path="/products"
        render={<ItemPage />}
        />
    </Switch> 
)
export default Routes