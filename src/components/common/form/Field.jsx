import React from 'react';
import styled from 'styled-components';
import { Field } from 'redux-form';
import InputStyle from './InputStyle';
import SelectStyle from './SelectStyle';
import MenuItem from 'material-ui/MenuItem';
import { SelectField as Select, TextField as Text } from 'redux-form-material-ui';


const required = value => value ? undefined : 'Required'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <InputStyle {...input} placeholder={label} type={type} component={Text}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
);

const renderSelect = ({ input, label }) => (
  <div>
    <SelectStyle {...input} />
  </div>
);

export const TextField = ({label, name, placeholder, type }) => (
  <div>
    <Field
      name={name}
      placeholder={placeholder}
      label={label}
      component={renderField}
      validate={required}
      type={type}
    />
  </div>
);

export const RegisterTextField = ({label, name, placeholder, type }) => (
  <div>
    <Field
      name={name}
      placeholder={placeholder}
      label={label}
      component={Text}
      validate={required}
      type={type}
    />
  </div>
);
export const MaterialTextArea = ({label, name, placeholder, type }) => (
    <Field
      name={name}
      placeholder={placeholder}
      label={label}
      component={Text}
      validate={required}
      type={type}
      multiLine={true}
      style={{ fontSize: '14px', width: '80%' }}
    />
);
export const SelectField = ({label, name, options }) => {
  return (<div>
    <Field
      name={name}
      label={label}
      floatingLabelText={name}
      component={Select}
      validate={required}
    >
      <MenuItem value="">Please select</MenuItem>
      {options.map(option => (
        <MenuItem value={option.value} key={option.value} primaryText={option.label}/>
      ))}
    </Field>
  </div>)
}

export const SelectBox = ({label ,name, options }) => (
  <div>
  <Field
    name={name}
    label={label}
    floatingLabelText={name}
    component={Select}
    validate={required}
  >
    <MenuItem>Select level</MenuItem>
    <MenuItem value="1" primaryText="1" />
    <MenuItem value="2" primaryText="2" />
    <MenuItem value="3" primaryText="3" />
    <MenuItem value="4" primaryText="4" />
    <MenuItem value="5" primaryText="5" />
    <MenuItem value="6" primaryText="6" />
  </Field>
  </div>
)
