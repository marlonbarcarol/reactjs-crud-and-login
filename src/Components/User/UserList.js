import React from 'react';

const UserList = ({ users }) => {
  return users.map(user => (
    <div key={user.email}>
      { user.name } - { user.email }
    </div>
  ));
};

export default UserList;