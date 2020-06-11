import React, { Component } from 'react';
import LoginForm from '../../organisms/LoginForm';
import RegisterForm from '../../organisms/RegisterForm';
import Header from '../../organisms/Header';

class Welcome extends Component {
// base Login Page - can add logos, contact info etc in future
  constructor(props) {
    super(props);
  }

  render() {
    var form;
    if (this.props.formType === 'register') {
      form = <RegisterForm />
    } else {
      form = <LoginForm />
    }
    return (
      <div>
        <Header />
        {form}
      </div>
    );
  }
}

export default Welcome;