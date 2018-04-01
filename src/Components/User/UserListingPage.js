import React from 'react';
import axios from 'axios';
import UserList from './UserList';

class UserListingPage extends React.Component {
  state = { 
    users: [],
    isUsersLoading: false
  };

  componentDidMount() {
    this.setState({ isUsersLoading: true });

    /** {TODO} Implement a Provider to store the users */
    axios.get('users')
      .then(response => {
        this.setState({ 
          users: response.data, 
          isUsersLoading: false 
        });
      });
  }

  render() {
    return (
      <section className="in-content">
        <h2>User Listing</h2>
        { this.state.isUsersLoading ? <span>Loading</span>: <UserList users={ this.state.users }/> }
      </section>
    );
  }
}

export default UserListingPage;