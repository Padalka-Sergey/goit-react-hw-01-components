import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { Transactions } from 'components/Transactions/Transactions';
import user from '../../user.json';
import data from '../../data.json';
import dataFriends from '../../friends.json';
import dataTransactions from '../../transactions.json';
import { Container } from './App.styled';

export const App = () => {
  // console.log(data)
  return (
    <Container
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
        
      //   color: '#010101'
      // }}
    >
      <Profile
        username={user.username}   
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={dataFriends} />
      <Transactions transactions={dataTransactions} />
    </Container>
  );
};
