import PropTypes from 'prop-types';
import styled from 'styled-components';

const Avatar = styled.img`
  border-radius: 50%;
  width: 150px;
`;
const UserInfoUsername = styled.p`
  color: #212121;
`;
const UserInfoTag = styled.p`
  color: #212121;
`;
const UserInfoLocation = styled.p`
  color: #212121;
`;
const StatsList = styled.ul`
  display: flex;
  list-style: none;
`;
const MainInfo = styled.div`
width: 450px
background-color: #FFF
`;
const StatsDescription = styled.span`
  font-size: 15px;
`;
const Stats = styled.span`
  font-size: 18px;
`;

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, likes, views },
}) => (
  <>
    <MainInfo>
      <Avatar src={avatar} alt="Avatar" />
      <UserInfoUsername>{username}</UserInfoUsername>
      <UserInfoTag>@{tag}</UserInfoTag>
      <UserInfoLocation>{location}</UserInfoLocation>
    </MainInfo>
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
