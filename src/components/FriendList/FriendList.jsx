import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FriendListItem } from './FriendListItem';

const FriendsList = styled.ul`
  list-style: none;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px;
`;

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
