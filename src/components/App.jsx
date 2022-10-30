// Profile 
import { Profile } from "./Profile/Profile";
import user from "./Profile/user.json"
// Statistics 
import { Statistics } from "./Statistics/Statistics";
import stats from "./Statistics/data.json"
// Friends 
import { FriendList } from "./FriendList/FriendList";
import friends from "./FriendList/friends.json"
// TransactionHistory
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transactions.json"
import styled from "styled-components";

const Container = styled.div`
background-color: #f1f1f1;
margin-left: auto;
margin-right: auto;
max-width: 500px;
padding-right: 25px;
padding-left: 25px;
`

export const App = () => {
  return (
    <Container>
    <Profile 
      avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      location ={user.location }
      stats ={user.stats }
/>
      <Statistics
        title={ stats.title}
        stats={stats} />
      <FriendList friends={ friends} />
      <TransactionHistory transactions={ transactions} />
    </Container>);
};