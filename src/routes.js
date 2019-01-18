import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Cuando from './screens/Cuando'
import Donde from './screens/Donde'
import EnQue from './screens/EnQue'

const Routes = () => {

    const setRoutes = [
        {
            path: '/cuando',
            component: Cuando
        },
        {
            path: '/donde',
            component: Donde
        },
        {
            path: '/enque',
            component: EnQue
        }
    ]
    return(
        <div>
            <Switch>
                {
                    setRoutes.map( route => <Route component={route.component} exact path={route.path} /> )
                }
            </Switch>
        </div>
    )
}

export default Routes