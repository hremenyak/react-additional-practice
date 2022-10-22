import { User } from '../User/User';
import PropTypes from 'prop-types';

export const UserList = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <User user={user} />
        </li>
      ))}
    </ul>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
