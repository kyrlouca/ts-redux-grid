import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BoxYellow from '../components/box-yellow';
import BoxGreen from '../components/box-green';
import Box from '../components/box';

export default function ContentPage() {
  return (
    <Switch>
      <Route path="/greenBox" exact component={BoxGreen} />
      <Route path="/yellowBox" exact component={BoxYellow} />
      <Route exact path="//" component={Box} />
    </Switch>
  );
}
