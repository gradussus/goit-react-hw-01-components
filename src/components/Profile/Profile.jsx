import PropTypes from 'prop-types';
import styled from 'styled-components';

const Avatar = styled.img`
  border: 1px solid #9c9c9c;
  border-radius: 50%;
  width: 150px;
`;
const UserInfoUsername = styled.p`
  font-weight: bold;
  font-size: 20px;
`;
const UserInfoTag = styled.p`
  color: #9c9c9c;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const UserInfoLocation = styled.p`
  color: #9c9c9c;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const StatsList = styled.ul`
  display: flex;
  list-style: none;
  background-color: #dedede;
  padding-left: 0px;
`;
const StatsListItem = styled.li`
  display: flex;
  width: 100px;
  padding: 15px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  :not(:last-child) {
    border-right: 1px solid #9c9c9c;
  }
`;
const MainInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;
`;
const StatsDescription = styled.span`
  font-size: 15px;
`;
const Stats = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
const Card = styled.div`
  max-width: 300px;
  border-radius: 5px;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
`;

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, likes, views },
}) => (
  <Card>
    <MainInfo>
      <Avatar src={avatar} alt="Avatar" />
      <UserInfoUsername>{username}</UserInfoUsername>
      <UserInfoTag>@{tag}</UserInfoTag>
      <UserInfoLocation>{location}</UserInfoLocation>
    </MainInfo>
    <StatsList>
      <StatsListItem>
        <StatsDescription>Followers</StatsDescription>
        <Stats>{followers.toLocaleString('en-EN')}</Stats>
      </StatsListItem>
      <StatsListItem>
        <StatsDescription>Likes</StatsDescription>
        <Stats>{likes.toLocaleString('en-EN')}</Stats>
      </StatsListItem>
      <StatsListItem>
        <StatsDescription>Views</StatsDescription>
        <Stats>{views.toLocaleString('en-EN')}</Stats>
      </StatsListItem>
    </StatsList>
  </Card>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
