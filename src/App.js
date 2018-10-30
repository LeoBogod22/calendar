import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";

import Calendar from "./hoc/Calendar";
import Month from "./containers/Month";
import Show from "./containers/Month";
export default class App extends React.Component {
  render() {
    return (
      <Calendar>
        <HashRouter>
          <Switch>
            <Route path="/show"  exact  component={Show} />
            <Route path="/" exact component={Month} />
          </Switch>
        </HashRouter>
      </Calendar>
    );
  }
}
