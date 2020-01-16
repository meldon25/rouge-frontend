import React, { Component } from 'react'
import '../styles/register.css'

class Register extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
      passwordConfirmation: '',
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

  onRegister = e => {
    e.preventDefault()

    const { history, setUser } = this.props

      fetch(this.state)
      .then(() => (this.state))
      .then(res => setUser(res.user))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({
          email: '',
          password: '',
          passwordConfirmation: '',
          isError: true,
          errorMsg: 'Sign Up Details Invalid'
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
      return <button type="SUBMIT">Register</button>
    }
  }

  render() {
    const { username, password, passwordConfirmation } = this.state

    return (
      <div className="signup-cont">
        <div className="form-cont">
          <h2>Create An Account</h2>
          <form onSubmit={this.onRegister}>
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
            <div className="pwdconf">
              <label>Password Confirmation</label>
              <input
                required
                name="passwordConfirmation"
                value={passwordConfirmation}
                type="password"
                placeholder="Confirm Password"
                onChange={this.handleChange}
              />
            </div>
            {this.renderError()}
          </form>
        </div>
      </div>
    )
  }
}
export default Register

