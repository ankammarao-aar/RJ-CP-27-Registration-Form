// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
    isActive: false,
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    const validLastName = lastName !== ''
    this.setState({lastNameError: !validLastName})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    const validFirstName = firstName !== ''
    this.setState({firstNameError: !validFirstName})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    const validFirstName = firstName !== ''
    const validLastName = lastName !== ''

    if (validFirstName && validLastName) {
      this.setState({isActive: true})
    } else {
      this.setState({
        firstNameError: !validFirstName,
        lastNameError: !validLastName,
        isActive: false,
      })
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  renderForm = () => {
    const {firstName, lastName, firstNameError, lastNameError} = this.state
    const firstInputClassName = firstNameError ? 'first-error' : 'input-name'
    const lastInputClassName = lastNameError ? 'first-error' : 'input-name'

    return (
      <form className="form" onSubmit={this.onSubmitForm}>
        <label htmlFor="first" className="label">
          FIRST NAME
        </label>
        <input
          type="text"
          id="first"
          placeholder="First name"
          value={firstName}
          className={firstInputClassName}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
        {firstNameError && <p className="para">Required</p>}
        <label htmlFor="last" className="label">
          LAST NAME
        </label>
        <input
          type="text"
          id="last"
          placeholder="Last name"
          value={lastName}
          className={lastInputClassName}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
        {lastNameError && <p className="para">Required</p>}
        <div className="button-card">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    )
  }

  onClickSuccess = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
      firstName: '',
      lastName: '',
    }))
  }

  renderSuccess = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p className="success-text">Submitted Successfully</p>
      <button
        type="button"
        className="success-button"
        onClick={this.onClickSuccess}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isActive} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>

        <div className="card">
          {isActive ? this.renderSuccess() : this.renderForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
