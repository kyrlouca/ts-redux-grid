import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BoxYellow from './box-yellow';
import BoxGreen from './box-green';
import Box from './box';
import Customers from './customers';

export default function SwitcherPage() {
  return (
    <Switch>
      <Route path="/" exact component={Box} />
      <Route path="/customers" exact component={Customers} />
      <Route path="/greenBox" exact component={BoxGreen} />
      <Route path="/yellowBox" exact component={BoxYellow} />
    </Switch>
  );
}
