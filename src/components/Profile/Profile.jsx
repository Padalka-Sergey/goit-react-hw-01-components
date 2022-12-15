
import PropTypes from 'prop-types';
import { ProfileBox, ProfileDescr, Avatar, UserName, UserTag, UserLocation, Stats, StatsItem, Label, Qty } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats:{ followers, views, likes } }) => {
  return (
    <ProfileBox>
      <ProfileDescr>
        <Avatar
          src={avatar}
          alt="User avatar"
        />
          <UserName>{username}</UserName>
          <UserTag>@{tag}</UserTag>
          <UserLocation>{location}</UserLocation>
      </ProfileDescr>
      <Stats>
        <StatsItem>
           <Label>Followers</Label>
          <Qty>{followers}</Qty>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Qty>{views}</Qty>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Qty>{likes}</Qty>
        </StatsItem>
        </Stats>
    </ProfileBox>
  ) 
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  })
}