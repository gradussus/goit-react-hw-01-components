import PropTypes from 'prop-types';
import styled from 'styled-components';

const FriendItem = styled.li`
font-size: 20px;
background-color: red
`

const Online = styled.span`
    background-color: green;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 10px;
`

const Avatar = styled.img`
width: 50px
`
const Username = styled.p`
color: tomato
`

export const FriendListItem =({ avatar, name, isOnline}) =>{
    return  (<FriendItem >
        {isOnline === true ? (
                <Online/>
            ) : (
                <Online background-color = 'red'/>
            )}
        <Avatar src={avatar} alt="Avatar"/>
        <Username>{name}</Username>
    </FriendItem>
    )
    
}
FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  };