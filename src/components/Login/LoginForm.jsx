import React from 'react';
import { reduxForm } from 'redux-form';

import { TextField } from '../common/form/Field';
import Button from '../common/Button';
import Form from '../common/Form'

export const LoginForm = (props) => {
  const { handleSubmit, submitting } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        name="email"
        type="text"
        label="Email"
        placeholder="Email"
      /><br />
      <TextField
        name="password"
        type="password"
        label="Password"
        placeholder="Password"
      />
      <Button login type="submit" disabled={submitting}>Sign In</Button>
    </Form>
  );
};

export default reduxForm({
  form: 'login',
})(LoginForm);
