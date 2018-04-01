import React from 'react';
import axios from 'axios';
import './login.css';

const InitialState = {
  email: '',
  password: '',
  error: '',
  isSaving: false
};

class Login extends React.Component {
  state = InitialState;

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ isSaving: true });

    axios.post('authenticate', {
        email: this.state.email, 
        password: this.state.password
      })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ isSaving: false });
        const response = error.response.data;

        if (response && response.friendly) {
          this.setState({ error: response.message });
          return;
        }

        throw (error);
      });
  }

  onChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  }

  render() {
    const errorTemplate = this.state.error 
          ? <span className="error">{this.state.error}</span>
          : '';

    return (
      <section className="in-content">
        <h1>LOGIN</h1>
        <form className="row" onSubmit={ this.handleSubmit }>

          { errorTemplate }

          <div className="form-field">
            <label htmlFor="email">Email</label><br/>
            <input className="full-width" type="text" name="email" id="email" placeholder="Your @" required
              pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'
              value={ this.state.email }
              onChange={ this.onChange } />
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label><br/>
            <input  className="full-width"type="password" name="password" id="password" placeholder="Your hyper strong password" required
              minLength="6"
              value={ this.state.password }
              onChange={ this.onChange } />
          </div>

          <button type="submit" disabled={ this.isSaving } className="button">Send</button>
        </form>
      </section>
    )
  };
}

export default Login;