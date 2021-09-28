import { Redirect, Route, Switch } from "react-router-dom"
import _ from 'lodash'
import { generalRoutes } from "../../router/routes"
import React from "react"

export const MainRouter:React.FC = () => (
    <Switch>
        {_.values(generalRoutes).map((page, i) => (
            <Route key={i} exact path={`${page.path}`} component={page.component}/>
        ))}
        <Route path={'*'}>
            <Redirect to={'/'}/>
        </Route>
    </Switch>
)