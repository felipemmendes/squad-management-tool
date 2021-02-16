import { Switch, Route } from 'react-router-dom';

import CreateTeam from '../pages/CreateTeam';
import Dashboard from '../pages/Dashboard';
import EditTeam from '../pages/EditTeam';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path={'/team/:id'} component={EditTeam} />
      <Route path={'/create-team'} component={CreateTeam} />
    </Switch>
  );
};

export default Routes;
