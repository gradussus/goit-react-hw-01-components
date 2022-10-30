import PropTypes from 'prop-types';
import styled from 'styled-components';

const FriendItem = styled.li`
  font-size: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  margin-top: 10px;
  box-shadow: 3px 3px 2px 0px #787878;
`;

const Online = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 10px;
`;

const Avatar = styled.img`
  width: 50px;
  border: 1px solid #9c9c9c;
  background-color: transparent;
  border-radius: 5px;
  margin-right: 10px;
`;
const Username = styled.p`
  color: black;
`;

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      {isOnline === true ? (
        <Online style={{ backgroundColor: 'green' }} />
      ) : (
        <Online style={{ backgroundColor: 'red' }} />
      )}
      <Avatar src={avatar} alt="Avatar" />
      <Username>{name}</Username>
    </FriendItem>
  );
};
FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
