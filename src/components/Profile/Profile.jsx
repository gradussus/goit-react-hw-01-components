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
