import React from "react";
import styled from 'styled-components';
import { Field } from 'redux-form';

const required = value => value ? undefined : 'Required'


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <InputStyle {...input} placeholder={label} type={type} />
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

export const Select = ({ options, label, name }) => (
  <div>
    <Field
      name={name}
      label={label}
      component={renderField}
      validate={required}
    >
      {options.map(option => (
        <option value={option.value}>{option.text}</option>
      ))}
    </Field>
  </div>
);
