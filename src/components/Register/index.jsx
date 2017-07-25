import React from 'react';
import { connect } from 'react-redux';
import { registerSubmit as submit, getClubsAndSquads, getRoles } from '../../actions/registrationActions';

import RegisterForm from './RegisterForm';
import RegisterFormWrapper from './RegisterFormWrapper';
import RegisterModal from './RegisterModal';
import FormHeader from './FormHeader';
import { CenterText } from '../common/Text';

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  componentWillMount() {
    this.props.getClubsAndSquads();
    this.props.getRoles();
  }

  submitForm(values) {
    const id = this.props.user.id;
    const username = this.props.user.username;
    return this.props.submit({ ...values, id, username });
  }

  render() {
    const { roles, user } = this.props;
    return (
      <RegisterFormWrapper>
        <RegisterModal>
          <FormHeader username={user && user.username} />
          <CenterText>
            Looks like you're visiting for the first time. Fill out the form below to get started.
          </CenterText>
          <RegisterForm onSubmit={this.submitForm} clubs={this.props.clubsAndSquads} roles={roles} />
        </RegisterModal>
      </RegisterFormWrapper>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user.user,
  clubsAndSquads: state.clubAndSquad.clubsAndSquads,
  roles: state.role,
});

export const mapDispatchToProps = {
  getClubsAndSquads,
  getRoles,
  submit,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
