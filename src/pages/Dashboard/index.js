import { useSelector } from 'react-redux';
import { FaPlus } from 'react-icons/fa';

import * as S from './styles';

import Layout from '../_PageLayout';
import Card from '../../components/Card';
import CardField from '../../components/CardField';
import Ranking from '../../components/Ranking';
import Table from '../../components/Table';

import myTeamTableColumns from '../../constants/dashboardTableSchema';

const rankingHighestData = [
  { id: 1, name: 'Inter Milan', average: 31.9 },
  { id: 2, name: 'APOEL Nicosia', average: 31.7 },
  { id: 3, name: 'AC Milan', average: 31.6 },
  { id: 4, name: 'Besikas JK', average: 31.4 },
  { id: 5, name: 'Olympiacos Piraeus', average: 31.3 },
];
const rankingLowestData = [
  { id: 6, name: 'Zalgiris', average: 21.1 },
  { id: 7, name: 'Arsenal FC', average: 21.6 },
  { id: 8, name: 'Ajax Amsterdan', average: 22.0 },
  { id: 9, name: 'FC Nantes', average: 22.1 },
  { id: 10, name: 'CSKA Moscow', average: 22.5 },
];

const Dashboard = () => {
  const { myTeams, pickedPlayers } = useSelector((state) => state.teams);

  return (
    <Layout>
      <Card title="My teams" hasButton to="/create-team" icon={<FaPlus />}>
        <Table columns={myTeamTableColumns} data={myTeams} />
      </Card>
      <S.Aside>
        <Card title="Top 5">
          <Ranking data={rankingHighestData} caption="Highest avg age" />
          <Ranking data={rankingLowestData} caption="Lowest avg age" />
        </Card>
        <CardField pickedPlayers={pickedPlayers} />
      </S.Aside>
    </Layout>
  );
};

export default Dashboard;
