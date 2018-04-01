import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import UserListingPage from '../User/UserListingPage';
import UserForm from '../User/UserForm';


class Home extends React.Component {
  state = {
    users: []
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <Switch>
            <Route exact path={`${this.props.match.url}users`} 
              render={props => <UserListingPage users={ this.state.users } />} />
            <Route exact path={`${this.props.match.url}users/add`}
              render={props => <UserForm { ...props } />} />
            <Redirect to={`${this.props.match.url}users`} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
};

export default Home;