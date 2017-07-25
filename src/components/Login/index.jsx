import React from 'react';
import { connect } from 'react-redux';

import LoginDiv from './LoginDiv';
import LoginWrapper from './LoginWrapper';
import Image from '../../components/common/Images';
import LoginForm from './LoginForm';
import { submit } from '../../actions/userActions';

export class Login extends React.Component {

  constructor(props){
    super(props)
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(values){
    return this.props.submit(values)
  }

  render() {
    return (
      <LoginWrapper>
        <LoginDiv>
          <LoginForm onSubmit={this.submitForm} />
        </LoginDiv>
      </LoginWrapper>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user,
});

export const mapDispatchToProps = {
  submit
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
