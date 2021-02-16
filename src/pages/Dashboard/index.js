import { FaPlus } from 'react-icons/fa';

import * as S from './styles';

import Layout from '../_PageLayout';
import Button from '../../components/Button';
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
const myTeams = [
  {
    id: 1,
    name: 'Barcelona',
    description: 'Adjisadjaoidjsa',
  },
  {
    id: 2,
    name: 'São Paulo',
    description: 'UEHEUR',
  },
  {
    id: 3,
    name: 'Santos',
    description: 'piitrofewa',
  },
];

const Dashboard = () => {
  return (
    <Layout>
      <Card
        title="My teams"
        button={<Button icon={FaPlus} to="/create-team" />}
      >
        <Table columns={myTeamTableColumns} data={myTeams} />
      </Card>
      <S.Aside>
        <Card title="Top 5">
          <Ranking data={rankingHighestData} caption="Highest avg age" />
          <Ranking data={rankingLowestData} caption="Lowest avg age" />
        </Card>
        <CardField
          mostPicked={{ initials: 'JD', picked: '75%' }}
          leastPicked={{ initials: 'AR', picked: '25%' }}
        />
      </S.Aside>
    </Layout>
  );
};

export default Dashboard;
