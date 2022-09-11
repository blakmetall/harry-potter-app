import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styled';

const Button = ({ onClick, label, disabled }) => {
    return (
        <StyledButton onClick={onClick} disabled={disabled}>
            {label}
        </StyledButton>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    onClick: () => {},
    label: '',
    disabled: false,
};

export default Button;
