import React from "react";
import { Route, Switch} from "react-router-dom";
import Main from './components/Main'
import Story from './components/Story'


const Routes = (props) =>
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/story/:id" component={Story}/>
  </Switch>;


export default Routes