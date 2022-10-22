import React from 'react';
import { users } from './data/users';
import { User } from './User/User';
import { UserList } from './UserList/UserList';
import { Section } from './UserList/Section/Section';

export const App = () => {
  return (
    <>
      <Section title="List of users">
        <UserList users={users} />
      </Section>
      <Section>
        <User user={users[0]} />
      </Section>
    </>
  );
};
