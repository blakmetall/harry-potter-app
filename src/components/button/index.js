import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styled';

const Button = ({ onClick, label }) => {
    return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

Button.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string,
};

Button.defaultProps = {
    onClick: () => {},
    label: '',
};

export default Button;
