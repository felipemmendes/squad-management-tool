import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Team from '../pages/Team';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path={['/team/:id', '/create-team']} component={Team} />
    </Switch>
  );
};

export default Routes;
