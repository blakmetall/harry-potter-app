import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { getUniqueId } from '../../helpers';
import { StyledFormInput, StyledFormLabel } from './styled';

function Input({ id, value, name, type, label, placeholder, required, onChange, className, disabled }) {
    // eslint-disable-next-line
    const [inputType, setInputType] = useState(type);

    const inputId = id || getUniqueId('input');
    const hasLabel = !!label;

    return (
        <div className={`mb-3 ${className}`}>
            <Form.Group controlId={inputId}>
                {/* label */}
                {hasLabel && (
                    <StyledFormLabel className="mb-2">
                        {label}

                        {required && <span className="text-primary">&nbsp;*</span>}
                    </StyledFormLabel>
                )}

                {/* form input */}
                <StyledFormInput
                    className=""
                    type={inputType}
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    disabled={disabled}
                />
            </Form.Group>
        </div>
    );
}

Input.propTypes = {
    id: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    type: PropTypes.oneOf(['email', 'date', 'password', 'hidden', 'number', 'text']),
    label: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    required: PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
};

Input.defaultProps = {
    id: '',
    value: '',
    name: undefined,
    type: 'text',
    label: '',
    placeholder: '',
    error: '',
    required: false,
    onChange: () => {},
    className: '',
    disabled: false,
};

export default Input;
