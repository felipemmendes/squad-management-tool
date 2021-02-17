import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import * as S from './styles';

import { FaPlus } from 'react-icons/fa';
import Layout from '../_PageLayout';
import Card from '../../components/Card';
import CardField from '../../components/CardField';
import Ranking from '../../components/Ranking';
import Table from '../../components/Table';

import myTeamTableColumns from '../../constants/dashboardTableSchema';
import { sortTeamsByAgeAvg } from '../../utils/sortTeamsByAgeAvg';

const Dashboard = () => {
  const { myTeams, pickedPlayers } = useSelector((state) => state.teams);
  const { highestAgeAvg, lowestAgeAvg } = useMemo(
    () => sortTeamsByAgeAvg(myTeams),
    [myTeams]
  );

  return (
    <Layout>
      <Card title="My teams" hasButton to="/create-team" icon={<FaPlus />}>
        <Table columns={myTeamTableColumns} data={myTeams} />
      </Card>
      <S.Aside>
        <Card title="Top 5">
          <Ranking data={highestAgeAvg} caption="Highest avg age" />
          <Ranking data={lowestAgeAvg} caption="Lowest avg age" />
        </Card>
        <CardField pickedPlayers={pickedPlayers} />
      </S.Aside>
    </Layout>
  );
};

export default Dashboard;
