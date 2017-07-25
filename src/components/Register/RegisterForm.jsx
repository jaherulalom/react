import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Form from '../common/Form';
import { RegisterTextField, SelectField, SelectBox } from '../common/form/Field';
import Button from '../common/Button'

export const RegisterForm = ({ handleSubmit, submitting, ...props }) => (
  <Form onSubmit={handleSubmit}>
    <RegisterTextField
      name="firstName"
      type="text"
      label="First Name"
      placeholder="First Name"
    />
    <RegisterTextField
      name="lastName"
      type="text"
      label="Last Name"
      placeholder="Last Name"
    />
    <SelectField
      name="club"
      label="Club"
      options={props.clubs}
    />
    <SelectField
      name="squad"
      label="squad"
      options={(props.registerForm && props.registerForm.values && props.registerForm.values.club &&
        props.clubs[props.registerForm.values.club - 1].squads) || []}
    />
    <SelectField
      name="roleId"
      label="role"
      options={props.roles}
      />
      <SelectBox name="level" component="select"/>
    <Button register type="submit" disabled={submitting}>Register</Button>
  </Form>
  );


const form = reduxForm({
  form: 'register',
})(RegisterForm);

const mapStateToProps = state => ({
  registerForm: state.form.register,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(form);
