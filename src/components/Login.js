import React, { Component } from 'react'
import '../styles/login.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isError: false,
      errorMsg: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      isError: false,
      errorMsg: ''
    })
  }

  onLogin = e => {
    e.preventDefault()

    const { history, setUser } = this.props
    const user = {
      username: this.state.username,
      password: this.state.password
    }

    fetch(user)
      // .then(res => setUser(res.user))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({
          isError: true,
          errorMsg: 'Invalid Credentials',
          username: '',
          password: ''
        })
      })
  }

  renderError = () => {
    const toggleForm = this.state.isError ? 'danger' : ''
    if (this.state.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {this.state.errorMsg}
        </button>
      )
    } else {
      return <button type="submit">LOGIN</button>
    }
  }

  render() {
    const { username, password } = this.state
    return (
      <div className="signin-cont">
        <div className="form-cont">
          <h2>LOGIN</h2>
          <p>Shopped with us before?</p>
          <p>Sign in here</p>
          <form onSubmit={this.onLogin}>
            <div className="username">
              <label>Username</label>
              <input
                required
                type="text"
                name="username"
                value={username}
                placeholder="Enter Username"
                onChange={this.handleChange}
              />
            </div>
            <div className="pwd">
              <label>Password</label>
              <input
                required
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>
            {this.renderError()}
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

