// Profile 
import { Profile } from "./Profile/Profile";
import user from "./Profile/user.json"
import { Statistics } from "./Statistics/Statistics";
import stats from "./Statistics/data.json"
// Statistics 


export const App = () => {
  return (
    <>
    <Profile 
      avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      location ={user.location }
      stats ={user.stats }
/>
      <Statistics
        title={ stats.title}
        stats = {stats} />
    </>);
};


// (
//   <Profile username={user.username}
//   tag={user.tag}
//   location={user.location}
//   avatar={user.avatar}
//   stats={user.stats} />

// );