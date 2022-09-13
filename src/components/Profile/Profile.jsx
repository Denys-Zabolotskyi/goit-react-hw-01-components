import PropTypes from 'prop-types';
import {ProfileCard,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Label, Value} from 'components/Profile/Profile.styled'
export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <li>
          <Label>Followers</Label>
          <Value>{followers.toLocaleString('en-US')}</Value>
        </li>
        <li>
          <Label>Views</Label>
          <Value>{views.toLocaleString('en-US')}</Value>
        </li>
        <li>
          <Label>Likes</Label>
          <Value>{likes.toLocaleString('en-US')}</Value>
        </li>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};