import { Text, Span, Title } from './User.styled';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';

export const User = ({ user: { name, email } }) => {
  const isRed = email.includes('biz');
  return (
    <>
      <Title>User</Title>
      <Avatar size="40" round={true} name={name} />
      <Text>
        Name: <Span>{name}</Span>
      </Text>
      <Text>
        Email: <Span isRed={isRed}>{email}</Span>
      </Text>
    </>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};
