import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

FormElement.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  detail: PropTypes.string,
  innerRef: PropTypes.func,
  errorMessage: PropTypes.string,
}

function FormElement({ name, label, type, placeholder, detail, innerRef, errorMessage }) {
  return (
    <Form.Group>
      <Form.Label>
        {label}
        <span className="text-danger ml-3 font-weight-bold">{errorMessage}</span>
      </Form.Label>
      <Form.Control ref={innerRef} type={type} name={name} placeholder={placeholder} />
      <Form.Text className="text-muted">
        {detail}
      </Form.Text>
    </Form.Group>
  )
}

export default FormElement;