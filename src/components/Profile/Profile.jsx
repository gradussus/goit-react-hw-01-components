import PropTypes from 'prop-types';
import styled from 'styled-components';

const Avatar = styled.img`
  border-radius: 50%;
`;
const UserInfo = styled.p`
  font-size: 20px;
`;
const StatsList = styled.ul`
  display: flex;
  list-style: none;
`;

const StatsDescription = styled.span`
font-size: 15px;
`
const Stats = styled.span`
font-size: 18px;
`

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, likes, views },
}) => (
    <>
  <div>
    <Avatar src={avatar} alt="Avatar" />
    <UserInfo>{username}</UserInfo>
    <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
        </div>
    <StatsList>
      <li>
        <StatsDescription>Followers</StatsDescription>
        <Stats>{followers}</Stats>
      </li>
      <li>
      <StatsDescription>Likes</StatsDescription>
        <Stats>{likes}</Stats>
      </li>
      <li>
      <StatsDescription>Views</StatsDescription>
        <Stats>{views}</Stats>
      </li>
    </StatsList>
    </>
);

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
