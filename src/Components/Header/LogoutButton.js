import React from 'react';
import { withRouter } from 'react-router-dom'

const LogoutButton = (props) => {
  const doLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem('token');
    props.history.push('/login');
  };

  return (
    /*
     * For now there is no /logout
     */
    <a href="/logout" onClick={doLogout} >Logout</a>
  )
};

export default withRouter(LogoutButton);