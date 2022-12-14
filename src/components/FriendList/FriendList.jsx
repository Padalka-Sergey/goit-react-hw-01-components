import PropTypes from 'prop-types';
import { FriendItems } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({friends}) => {
    return (
      <FriendItems>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
            id={friend.id}
          />
        
        ))}
        </FriendItems>
    );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    }),
  ),
}