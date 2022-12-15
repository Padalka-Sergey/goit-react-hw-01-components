import PropTypes from 'prop-types';
import { FriendItems } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({friends}) => {
    return (
      <FriendItems>
        {friends.map(({id, isOnline, avatar, name }) => (
          <FriendListItem
            key={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            // id={id}
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